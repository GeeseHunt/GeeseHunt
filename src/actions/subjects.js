export const subjectsActionTypes = {
  GET_SUBJECTS_REQUESTED: 'subjects/GET_SUBJECTS_REQUESTED',
  GET_SUBJECTS_SUCCESS: 'subjects/GET_SUBJECTS_SUCCESS',
  GET_SUBJECTS_FAILURE: 'subjects/GET_SUBJECTS_FAILURE',
};

const getSubjectRequested = payload => ({
  type: subjectsActionTypes.GET_SUBJECTS_REQUESTED,
  ...payload,
});

const getSubjectsSuccess = payload => ({
  type: subjectsActionTypes.GET_SUBJECTS_SUCCESS,
  ...payload,
});

const getSubjectsFailure = payload => ({
  type: subjectsActionTypes.GET_SUBJECTS_FAILURE,
  ...payload,
});

export const getSubjects = (payload = {}) => {
  return (dispatch, getState, { graphqlRequest }) => {
    const { first, after } = payload;

    dispatch(getSubjectRequested(payload));

    const query = `
    query Subjects($first: Int, $after: String) {
      subjects(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        totalCount
        edges {
          node {
            ... on Subject {
              subject
              description
              unit
              group
            }
          }
          cursor
        }
      }
    }
    `;

    return graphqlRequest(query, { first, after }).then(({ data, errors }) => {
      if (errors) {
        dispatch(getSubjectsFailure({ errors }));
        return;
      }

      dispatch(getSubjectsSuccess({ data: data.subjects }));
    });
  };
};
