import { coursesActionTypes } from '../actions/courses';

const initialState = {
  loading: false,
  courses: [],
  endCursor: null,
  hasNextPage: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case coursesActionTypes.GET_COURSES_REQUESTED: {
      const shouldPaginate = Boolean(action.after);
      const courses = shouldPaginate ? state.courses : [];

      return { ...state, loading: true, courses };
    }

    case coursesActionTypes.GET_COURSES_SUCCESS: {
      const {
        courses: { edges },
        pageInfo,
      } = action;
      const courses = edges.map(edge => edge.node);

      return {
        ...state,
        loading: false,
        courses: state.courses.concat(courses),
        ...pageInfo,
      };
    }

    case coursesActionTypes.GET_COURSES_FAILURE:
      return { ...state, loading: false };

    default:
      break;
  }
  return state;
}
