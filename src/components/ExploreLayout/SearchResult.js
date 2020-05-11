import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText, ListItemIcon, ListSubheader } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import ClassIcon from '@material-ui/icons/Class';
import InfiniteScrollList from '../InfiniteScrollList';
import { FETCH_COURSES } from '../../data/queries';
import useStyles from './styles/SearchResult';

const initialData = {
  courses: {
    edges: [],
    pageInfo: {},
  },
};

const SearchResult = ({ keyword, className }) => {
  const classes = useStyles();
  const { data = initialData, loading: coursesLoading, fetchMore } = useQuery(
    FETCH_COURSES,
    {
      variables: {
        first: 10,
        keyword,
      },
      notifyOnNetworkStatusChange: true,
    },
  );
  const courses = data.courses.edges
    .map(item => item.node)
    .map(course => ({
      ...course,
      key: `${course.subject}${course.catalogNumber}`,
    }));
  const { pageInfo } = data.courses;

  const renderCourseListItem = course => (
    <React.Fragment>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText
        primary={`${course.subject} ${course.catalogNumber}`}
        secondary={course.title}
      />
    </React.Fragment>
  );

  const handleFetchMoreCourses = () => {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.courses.edges;

          return newEdges.length
            ? {
                courses: {
                  // eslint-disable-next-line no-underscore-dangle
                  __typename: previousResult.courses.__typename,
                  edges: [...previousResult.courses.edges, ...newEdges],
                  pageInfo: fetchMoreResult.courses.pageInfo,
                },
              }
            : previousResult;
        },
      });
    }
  };

  return (
    <div className={className}>
      <InfiniteScrollList
        items={courses}
        loading={coursesLoading}
        renderItem={renderCourseListItem}
        onLoadData={handleFetchMoreCourses}
        className={classes.scrollList}
        subheader={<ListSubheader>Courses</ListSubheader>}
      />
    </div>
  );
};

SearchResult.propTypes = {
  keyword: PropTypes.string,
  className: PropTypes.string,
};

SearchResult.defaultProps = {
  keyword: '',
  className: '',
};

export default SearchResult;
