import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';
import {
  typeDefs as SubjectTypeDefs,
  resolvers as SubjectResolvers,
} from './graphql/subject';
import {
  typeDefs as PaginationTypeDefs,
  resolvers as PaginationResolvers,
} from './graphql/pagination';
import {
  typeDefs as CourseTypeDefs,
  resolvers as CourseResolvers,
} from './graphql/course';

const rootQuery = gql`
  type Query {
    _empty: String
  }
`;

const typeDefs = [
  rootQuery,
  PaginationTypeDefs,
  CourseTypeDefs,
  SubjectTypeDefs,
];

const resolvers = merge(PaginationResolvers, SubjectResolvers, CourseResolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  ...(__DEV__ ? { log: e => console.error(e.stack) } : {}),
});
