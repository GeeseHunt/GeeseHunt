import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import subjects from './queries/subjects';
import courses from './queries/courses';
import course from './queries/course';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      subjects,
      courses,
      course,
    },
  }),
});

export default schema;
