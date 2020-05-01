import { subjectsActionTypes } from '../actions/subjects';

const initialState = {
  loading: false,
  subjects: [],
  endCursor: null,
  hasNextPage: true,
};

export default function(state = initialState, action) {
  const { type, data = {} } = action;

  switch (type) {
    case subjectsActionTypes.GET_SUBJECTS_REQUESTED: {
      const isPagination = Boolean(action.after);
      const subjects = isPagination ? state.subjects : [];

      return { ...state, loading: true, subjects };
    }

    case subjectsActionTypes.GET_SUBJECTS_SUCCESS: {
      const { pageInfo, edges } = data;
      const subjects = state.subjects.concat(edges.map(edge => edge.node));

      return {
        ...state,
        loading: false,
        subjects,
        endCursor: pageInfo.endCursor,
        hasNextPage: pageInfo.hasNextPage,
      };
    }

    case subjectsActionTypes.GET_SUBJECTS_FAILURE:
      return { ...state, loading: false };

    default:
      break;
  }

  return state;
}
