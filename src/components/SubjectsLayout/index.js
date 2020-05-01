import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ListItemText,
  Typography,
  Paper,
  ListSubheader,
} from '@material-ui/core';
import { getSubjects as getSubjectsAction } from '../../actions/subjects';
import { selectSubjects } from '../../selectors/subjects';
import InfiniteScrollList from '../InfiniteScrollList';

const pageSize = 15;

const ExploreLayout = ({ subjects, getSubjects }) => {
  React.useEffect(() => {
    getSubjects({ first: pageSize });
  }, [getSubjects, pageSize]);

  const handleLoadData = () => {
    if (subjects.hasNextPage)
      getSubjects({ first: pageSize, after: subjects.endCursor });
  };

  const subjectsToRender = subjects.subjects.map(subject => ({
    ...subject,
    key: subject.subject,
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
        subheader={<ListSubheader>Subjects</ListSubheader>}
        items={subjectsToRender}
        renderItem={renderSubject}
        onLoadData={handleLoadData}
        loading={subjects.loading}
      />
    </Paper>
  );
};

ExploreLayout.propTypes = {
  subjects: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    subjects: PropTypes.array.isRequired,
    endCursor: PropTypes.string,
    hasNextPage: PropTypes.bool.isRequired,
  }).isRequired,
  getSubjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: selectSubjects(state),
});

const mapDispatchToProps = {
  getSubjects: getSubjectsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLayout);
