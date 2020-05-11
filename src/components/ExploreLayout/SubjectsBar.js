import React from 'react';
import { Fab } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import Link from '../Link/Link';
import useStyles from './styles/SubjectsBar';
import { FETCH_SUBJECTS } from '../../data/queries';

const initialData = {
  subjects: {
    edges: [],
  },
};

const SubjectsBar = () => {
  const classes = useStyles();
  const { data: subjectsData = initialData } = useQuery(FETCH_SUBJECTS, {
    variables: { first: 6 },
  });
  const subjects = subjectsData.subjects.edges.map(item => item.node);

  const renderedSubjects = subjects.map(({ subject }) => (
    <Fab key={subject} variant="extended" className={classes.button}>
      {subject}
    </Fab>
  ));

  return (
    <div className={classes.subjectsBarWrapper}>
      {renderedSubjects}
      <Link to="/explore/subjects" className={classes.subjectItemLink}>
        <Fab variant="extended" color="primary" className={classes.button}>
          All Subjects
        </Fab>
      </Link>
    </div>
  );
};

export default SubjectsBar;
