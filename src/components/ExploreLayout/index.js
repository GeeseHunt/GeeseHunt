import React from 'react';
import { Fab, Container, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { selectSubjects } from '../../selectors/subjects';
import { getSubjects as getSubjectsAction } from '../../actions/subjects';
import { getCourses as getCoursesAction } from '../../actions/courses';
import Link from '../Link/Link';
import SearchField from './SearchField';
import useStyles from './styles';
import { selectCourses } from '../../selectors/courses';

const ExploreLayout = ({ subjects, courses, getSubjects, getCourses }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getSubjects({ first: 5 });
  }, [getSubjects]);

  const handleSearchChange = keyword => {
    if (keyword) getCourses({ keyword, first: 5 });
  };

  const renderedSubjects = subjects.subjects.map(({ subject }) => (
    <Fab key={subject} variant="extended" className={classes.button}>
      {subject}
    </Fab>
  ));

  return (
    <Container maxWidth="xl">
      <div className={classes.subjectsBarWrapper}>
        {renderedSubjects}
        <Link to="/explore/subjects" className={classes.subjectItemLink}>
          <Fab variant="extended" color="primary" className={classes.button}>
            All Subjects
          </Fab>
        </Link>
      </div>
      <Divider />
      <div className={classes.searchWrapper}>
        <SearchField
          className={classes.searchField}
          onChange={_.debounce(handleSearchChange, 300)}
        />
        <ul>
          {courses.courses.map(course => (
            <li>
              {course.subject} {course.catalogNumber} - {course.title}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const paginationTypes = {
  endCursor: PropTypes.string,
  hasNextPage: PropTypes.bool.isRequired,
};

ExploreLayout.propTypes = {
  subjects: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    subjects: PropTypes.array.isRequired,
    ...paginationTypes,
  }).isRequired,
  courses: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    courses: PropTypes.array.isRequired,
    ...paginationTypes,
  }).isRequired,
  getSubjects: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: selectSubjects(state),
  courses: selectCourses(state),
});

const mapDispatchToProps = {
  getSubjects: getSubjectsAction,
  getCourses: getCoursesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLayout);
