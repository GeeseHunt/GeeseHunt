import { GraphQLString as StringType } from 'graphql';
import CourseType from '../types/CourseType';

const course = {
  type: CourseType,
  args: {
    subject: { type: StringType },
    catalogNumber: { type: StringType },
  },
  resolve(rootValue, { subject, catalogNumber }, { clients }) {
    return clients.uwDataClient.getCourse(subject, catalogNumber);
  },
};

export default course;
