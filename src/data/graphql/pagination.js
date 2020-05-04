/* eslint-disable import/prefer-default-export */

/**
 * Implementation of https://graphql.org/learn/pagination/
 */

import gql from 'graphql-tag';

export const typeDefs = gql`
  union PageEdgeNode = Subject

  type PageEdge {
    node: PageEdgeNode
    cursor: String
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type Page {
    totalCount: Int
    edges: [PageEdge]
    pageInfo: PageInfo
  }
`;

export const resolvers = {
  PageEdgeNode: {
    __resolveType: obj => obj.schemaType,
  },
};

const encodeCursor = obj => Buffer.from(JSON.stringify(obj)).toString('base64');

const decodeCursor = str =>
  JSON.parse(Buffer.from(str, 'base64').toString('ascii'));

export const paginate = (resolver, options) => {
  if (!options) throw new Error('Expected pagination options to be supplied.');
  const { type, cursor: getCursor } = options;

  return async (rootValue, args, context, info) => {
    const query = (c, l) =>
      resolver(rootValue, { ...args, cursor: c, limit: l }, context, info);

    const { first, after } = args;
    const cursor = after ? decodeCursor(after) : {};
    const limit = first || -1;
    const result = await query(cursor, limit !== -1 ? limit + 1 : limit);
    let hasNextPage = false;

    if (limit !== -1 && result.length === limit + 1) {
      hasNextPage = true;
      result.pop();
    }

    const totalCount = result.length;
    const edges = result.map(item => ({
      node: { ...item, schemaType: type },
      cursor: encodeCursor(getCursor(item, rootValue, args, context, info)),
    }));
    const endCursor = edges.length ? edges[edges.length - 1].cursor : null;

    return {
      totalCount,
      edges,
      pageInfo: { endCursor, hasNextPage },
    };
  };
};
