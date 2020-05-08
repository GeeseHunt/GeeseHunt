import React from 'react';
import { ListItemText, Paper, ListSubheader } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import InfiniteScrollList from '../InfiniteScrollList';
import { FETCH_SUBJECTS } from '../../data/queries';
import useStyles from './styles';

const initialData = {
  subjects: {
    edges: [],
    pageInfo: {},
  },
};

const ExploreLayout = () => {
  const classes = useStyles();
  const { loading, data = initialData, fetchMore } = useQuery(FETCH_SUBJECTS, {
    variables: { first: 15 },
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
                // Put the new subjects at the end of the list and update `pageInfo`
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
    <ListItemText primary={subject} secondary={description} />
  );

  return (
    <Paper className={classes.container}>
      <InfiniteScrollList
        dense
        subheader={<ListSubheader>Subjects</ListSubheader>}
        items={subjectsToRender}
        renderItem={renderSubject}
        onLoadData={handleLoadData}
        loading={loading}
        className={classes.list}
      />
    </Paper>
  );
};

export default ExploreLayout;
