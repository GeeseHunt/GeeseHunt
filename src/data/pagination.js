/* eslint-disable import/prefer-default-export */

/**
 * Implementation of https://graphql.org/learn/pagination/
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList,
  GraphQLBoolean as BooleanType,
  GraphQLUnionType as UnionType,
} from 'graphql';
import SubjectType from './types/SubjectType';

const paginateTypes = [SubjectType];

const PageEdgeNodeType = new UnionType({
  name: 'PageEdgeNode',
  resolveType: val => val.graphqlType,
  types: () => paginateTypes,
});

const PageEdgeType = new ObjectType({
  name: 'PageEdge',
  fields: () => ({
    node: { type: PageEdgeNodeType },
    cursor: { type: StringType },
  }),
});

const PageInfoType = new ObjectType({
  name: 'PageInfo',
  fields: () => ({
    endCursor: { type: StringType },
    hasNextPage: { type: BooleanType },
  }),
});

const PageType = new ObjectType({
  name: 'Page',
  fields: () => ({
    totalCount: { type: IntType },
    edges: { type: new GraphQLList(PageEdgeType) },
    pageInfo: { type: PageInfoType },
  }),
});

const encodeCursor = obj => Buffer.from(JSON.stringify(obj)).toString('base64');

const decodeCursor = str =>
  JSON.parse(Buffer.from(str, 'base64').toString('ascii'));

export const paginate = options => {
  const {
    type,
    args: optionArgs,
    cursor: getCursor,
    resolve: queryResolver,
  } = options;

  return {
    type: PageType,
    args: {
      ...optionArgs,
      first: { type: IntType },
      after: { type: StringType },
    },
    resolve: async (rootValue, args, context, info) => {
      const query = (c, l) =>
        queryResolver(
          rootValue,
          { ...args, cursor: c, limit: l },
          context,
          info,
        );

      const { first, after } = args;
      const cursor = after ? decodeCursor(after) : {};
      const limit = first || false;
      const result = await query(cursor, limit);
      const totalCount = result.length;
      const edges = result.map(item => ({
        node: { ...item, graphqlType: type },
        cursor: encodeCursor(getCursor(item, rootValue, args, context, info)),
      }));
      const endCursor = edges.length ? edges[edges.length - 1].cursor : null;

      // checks if it's possible to get next item
      // not sure if there's a better way to do it
      const hasNextPage =
        endCursor &&
        (await query(decodeCursor(endCursor, 1)).then(res => res.length > 0));

      return {
        totalCount,
        edges,
        pageInfo: { endCursor, hasNextPage },
      };
    },
  };
};
