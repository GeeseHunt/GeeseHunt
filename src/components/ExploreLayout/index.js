import React from 'react';
import {
  ListItemText,
  Typography,
  Paper,
  ListSubheader,
} from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import InfiniteScrollList from '../InfiniteScrollList';

const FETCH_SUBJECTS = gql`
  query FetchSubjects($first: Int, $after: String) {
    subjects(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Subject {
            subject
            description
            unit
            group
          }
        }
      }
    }
  }
`;

const pageSize = 15;

const initialData = {
  subjects: {
    edges: [],
    pageInfo: {},
  },
};

const ExploreLayout = () => {
  const { loading, data = initialData, fetchMore } = useQuery(FETCH_SUBJECTS, {
    variables: { first: pageSize },
    notifyOnNetworkStatusChange: true,
  });
  const { edges, pageInfo } = data.subjects;

  const handleLoadData = () => {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.subjects.edges;

          return newEdges.length
            ? {
                // Put the new comments at the end of the list and update `pageInfo`
                // so we have the new `endCursor` and `hasNextPage` values
                subjects: {
                  // eslint-disable-next-line no-underscore-dangle
                  __typename: previousResult.subjects.__typename,
                  edges: [...previousResult.subjects.edges, ...newEdges],
                  pageInfo: fetchMoreResult.subjects.pageInfo,
                },
              }
            : previousResult;
        },
      });
    }
  };

  const subjectsToRender = edges.map(edge => ({
    ...edge.node,
    key: edge.node.subject,
  }));

  // eslint-disable-next-line react/prop-types
  const renderSubject = ({ subject, description }) => (
    <ListItemText>
      <Typography variant="subtitle2">
        {subject} - {description}
      </Typography>
    </ListItemText>
  );

  return (
    <Paper>
      <InfiniteScrollList
        dense
        subheader={<ListSubheader>Subjects</ListSubheader>}
        items={subjectsToRender}
        renderItem={renderSubject}
        onLoadData={handleLoadData}
        loading={loading}
      />
    </Paper>
  );
};

export default ExploreLayout;
