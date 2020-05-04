import gql from 'graphql-tag';

export const typeDefs = gql`
  type Course {
    courseId: String!
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
    courses(subject: String, first: Int, after: String): [Course]
  }
`;

export const resolvers = {
  Query: {
    course: (rootVal, { subject, catalogNumber }, { clients }) => {
      return clients.uwDataClient.getCourse(subject, catalogNumber);
    },
    courses: (rootVal, { subject }, { clients }) => {
      if (!subject) return clients.uwDataClient.getCourses();
      return clients.uwDataClient.getCoursesBySubject(subject);
    },
  },
};
