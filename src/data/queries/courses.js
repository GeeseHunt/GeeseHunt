import { GraphQLList, GraphQLString as StringType } from 'graphql';
import CourseType from '../types/CourseType';

const courses = {
  type: new GraphQLList(CourseType),
  args: {
    subject: { type: StringType },
  },
  resolve(rootValue, { subject }, { clients }) {
    if (!subject) return clients.uwDataClient.getCourses();
    return clients.uwDataClient.getCoursesBySubject(subject);
  },
};

export default courses;
