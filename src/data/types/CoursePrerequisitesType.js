import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const CoursePrerequisitesType = new ObjectType({
  name: 'CoursePrerequisites',
  fields: {
    prerequisites: { type: StringType },
    prerequisitesParsed: { type: StringType },
  },
});

export default CoursePrerequisitesType;
