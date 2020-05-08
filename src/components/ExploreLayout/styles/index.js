import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  layoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  searchBoxContainer: {
    padding: theme.spacing(3),
  },
  searchField: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  resultContainer: {
    flex: 1,
    minHeight: theme.spacing(10),
    marginTop: theme.spacing(2),
  },
  searchResult: {
    height: '100%',
  },
}));
