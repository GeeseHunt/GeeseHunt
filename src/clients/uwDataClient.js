import nodeFetch from 'node-fetch';
import LRU from 'lru-cache';
import createFetch from '../createFetch';

const cacheMaxAge = 24 * 60 * 60 * 1000; // one day
const cacheMaxSize = 100 * 1024 * 1024; // 100MB

export default class UWDataClient {
  constructor(options = { baseUrl: '', apiKey: '', cache: true }) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
    this.cacheEnabled = options.cache;
    if (this.cacheEnabled)
      this.lruCache = new LRU({ max: cacheMaxSize, maxAge: cacheMaxAge });
    this.fetch = createFetch(nodeFetch, {});
  }

  get(target) {
    if (this.cacheEnabled && this.lruCache.has(target))
      return Promise.resolve(this.lruCache.get(target));

    const params = new URLSearchParams({ key: this.apiKey });
    const url = new URL(`${target}.json?${params.toString()}`, this.baseUrl);

    const options = {
      method: 'GET',
    };

    return this.fetch(url.toString(), options)
      .then(res => res.json())
      .then(res => res.data)
      .then(data => {
        if (this.cacheEnabled) this.lruCache.set(target, data);
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Replace catalog_number with catalogNumber for naming consistency
  static transformCourseObject(course) {
    const newCourse = Object.assign(
      { catalogNumber: course.catalog_number },
      course,
    );
    delete newCourse.catalog_number;

    return newCourse;
  }

  getSubjects() {
    return this.get('codes/subjects');
  }

  getCourses() {
    return this.get('courses').then(courses =>
      courses.map(UWDataClient.transformCourseObject),
    );
  }

  getCoursesBySubject(subject) {
    return this.get(`courses/${subject}`).then(courses =>
      courses.map(UWDataClient.transformCourseObject),
    );
  }

  getCourse(subject, catalogNumber) {
    return this.get(`courses/${subject}/${catalogNumber}`).then(
      UWDataClient.transformCourseObject,
    );
  }

  getCoursePrerequisites(subject, catalogNumber) {
    return this.get(`courses/${subject}/${catalogNumber}/prerequisites`);
  }
}
