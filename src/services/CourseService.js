/* eslint-disable no-underscore-dangle */
import LRU from 'lru-cache';
import Fuse from 'fuse.js';
import Course from '../data/models/Course';

const fuseOptions = {
  keys: ['subject', 'catalogNumber', 'title'],
};

export default class CourseService {
  constructor({ clients }) {
    this.client = clients.uwDataClient;
    this.coursesDataCache = new LRU({
      max: 50 * 1024 * 1024, // 50MB,
      cacheMaxAge: 24 * 60 * 60 * 1000, // one day
    });
  }

  async getCoursesBySubject(subject) {
    if (this.coursesDataCache.has(subject))
      return Promise.resolve(this.coursesDataCache.get(subject));

    const result = (
      await Course.find({ ...(subject ? { subject } : {}) }).sort({
        popularity: -1,
        _id: 1,
      })
    ).map(course => course.toObject());

    this.coursesDataCache.set(subject, result);

    return result;
  }

  async searchCourses(subject, keyword) {
    const courses = await this.getCoursesBySubject(subject);

    if (!keyword) return courses;

    const fuse = new Fuse(courses, fuseOptions);
    const searchResult = fuse.search(keyword).map(({ item }) => item);

    return searchResult;
  }
}
