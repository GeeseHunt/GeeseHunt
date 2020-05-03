import Subject from '../models/Subject';
import SubjectType from '../types/SubjectType';
import { paginate } from '../pagination';

const subjects = paginate({
  type: SubjectType,
  cursor: item => ({
    // eslint-disable-next-line no-underscore-dangle
    _id: { $gt: item._id },
    popularity: { $lte: item.popularity },
  }),
  resolve(rootValue, args) {
    const { cursor, limit } = args;
    let query = Subject.find(cursor).sort({ popularity: -1, _id: 1 });

    if (limit !== -1) query = query.limit(limit);

    return query.exec().then(items => items.map(item => item.toObject()));
  },
});

export default subjects;
