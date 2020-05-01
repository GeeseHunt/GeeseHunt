import { GraphQLString as StringType } from 'graphql';
import Fuse from 'fuse.js';
import LRU from 'lru-cache';
import CourseType from '../types/CourseType';
import { paginate } from '../pagination';

const lruCache = new LRU({
  max: 200 * 1024 * 1024, // 200MB,
  cacheMaxAge: 24 * 60 * 60 * 1000, // one day
});

const fuseOption = {
  threshold: 0.5,
  keys: [
    {
      name: 'subject',
      weight: 0.4,
    },
    {
      name: 'catalogNumber',
      weight: 0.4,
    },
    {
      name: 'title',
      weight: 0.2,
    },
  ],
};

const searchCourses = async ({ subject, keyword }, { clients }) => {
  const cacheKey = JSON.stringify({ subject, keyword });

  if (lruCache.has(cacheKey)) return Promise.resolve(lruCache.get(cacheKey));

  let result = await (subject
    ? clients.uwDataClient.getCoursesBySubject(subject)
    : clients.uwDataClient.getCourses());

  if (keyword) {
    const fuse = new Fuse(result, fuseOption);

    result = fuse.search(keyword.replace(' ', '')).map(item => item.item);
  }

  lruCache.set(cacheKey, result);

  return result;
};

const courses = paginate({
  type: CourseType,
  args: {
    subject: { type: StringType },
    keyword: { type: StringType },
  },
  cursor: item => ({
    catalogNumber: item.catalogNumber,
  }),
  async resolve(rootValue, args, context) {
    const { subject = '', keyword = '', cursor, limit } = args;
    const result = await searchCourses({ subject, keyword }, context);
    const pos = result.findIndex(
      course =>
        course.subject === subject &&
        course.catalogNumber === cursor.catalogNumber,
    );
    const start = pos > 0 ? pos : 0;

    if (!limit) return result.slice(start);

    return result.slice(start, start + limit);
  },
});

export default courses;
