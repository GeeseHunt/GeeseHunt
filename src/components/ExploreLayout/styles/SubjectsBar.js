import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  subjectsBarWrapper: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
    marginBottom: theme.spacing(2),
  },
  button: {
    textTransform: 'none',
  },
  subjectItemLink: {
    textDecoration: 'none',
  },
}));
