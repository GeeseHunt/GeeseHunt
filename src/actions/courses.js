export const coursesActionTypes = {
  GET_COURSES_REQUESTED: 'courses/GET_COURSES_REQUESTED',
  GET_COURSES_SUCCESS: 'courses/GET_COURSES_SUCCESS',
  GET_COURSES_FAILURE: 'courses/GET_COURSES_FAILURE',
};

const coursesQuery = `
    query C($subject: String, $keyword: String, $first: Int, $after: String) {
      courses(subject: $subject, keyword: $keyword, first: $first, after: $after) {
        pageInfo  {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ... on Course {
              subject
              catalogNumber
              title
            }
          }
        }
      }
    }`;

const getCoursesRequested = payload => ({
  type: coursesActionTypes.GET_COURSES_REQUESTED,
  ...payload,
});

const getCoursesSuccess = payload => ({
  type: coursesActionTypes.GET_COURSES_SUCCESS,
  ...payload,
});

const getCoursesFailure = payload => ({
  type: coursesActionTypes.GET_COURSES_FAILURE,
  ...payload,
});

export const getCourses = payload => {
  return (dispatch, getState, { graphqlRequest }) => {
    const { subject, keyword, first, after } = payload;

    dispatch(getCoursesRequested(payload));

    return graphqlRequest(coursesQuery, {
      subject,
      keyword,
      first,
      after,
    }).then(({ data, errors }) => {
      if (errors) dispatch(getCoursesFailure({ errors }));
      else dispatch(getCoursesSuccess(data));
    });
  };
};
