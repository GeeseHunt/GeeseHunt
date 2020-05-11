/* eslint-disable no-underscore-dangle */
import gql from 'graphql-tag';
import { paginate } from './pagination';

export const typeDefs = gql`
  type Course {
    subject: String!
    catalogNumber: String!
    title: String!
    units: Float
    description: String
    academic_level: String
    prerequisites: String
    antirequisites: String
  }

  extend type Query {
    course(subject: String, catalogNumber: String): Course
    courses(subject: String, first: Int, after: String, keyword: String): Page
  }
`;

const paginationOptions = {
  type: 'Course',
  cursor: course => ({
    _id: course._id,
  }),
};

export const resolvers = {
  Query: {
    course: (rootVal, { subject, catalogNumber }, { clients }) => {
      return clients.uwDataClient.getCourse(subject, catalogNumber).slice();
    },
    courses: paginate(
      async (rootVal, { subject, keyword, cursor, limit }, { services }) => {
        const courses = await services.courseService.searchCourses(
          subject,
          keyword,
        );

        const startIndex =
          courses.findIndex(course => course._id.equals(cursor._id)) + 1;

        return courses.slice(startIndex, startIndex + limit);
      },
      paginationOptions,
    ),
  },
};
