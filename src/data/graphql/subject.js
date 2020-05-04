import gql from 'graphql-tag';
import Subject from '../models/Subject';
import { paginate } from './pagination';

export const typeDefs = gql`
  type Subject {
    subject: String!
    description: String
    unit: String
    group: String
  }

  extend type Query {
    subjects(first: Int, after: String): Page
  }
`;

const paginationOptions = {
  type: 'Subject',
  cursor: subject => ({
    // eslint-disable-next-line no-underscore-dangle
    _id: { $gt: subject._id },
    popularity: { $lte: subject.popularity },
  }),
};

export const resolvers = {
  Query: {
    subjects: paginate((rootVal, args) => {
      const { cursor, limit } = args;
      let query = Subject.find(cursor).sort({ popularity: -1, _id: 1 });

      if (limit !== -1) query = query.limit(limit);

      return query.exec().then(items => items.map(item => item.toObject()));
    }, paginationOptions),
  },
};
