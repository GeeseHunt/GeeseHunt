import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
} from 'graphql';
import coursePrerequisites from '../queries/coursePrerequisites';

const CourseType = new ObjectType({
  name: 'Course',
  fields: {
    courseId: { type: StringType }, // courseId returned by uw api is not unique, use string for now
    subject: { type: StringType },
    catalogNumber: { type: StringType },
    title: { type: StringType },
    units: { type: FloatType },
    description: { type: StringType },
    academic_level: { type: StringType },
    prerequisites: { type: StringType },
    antirequisites: { type: StringType },
    coursePrerequisites,
  },
});

export default CourseType;
