import React from 'react';
import { Container, Divider, Paper } from '@material-ui/core';
import _ from 'lodash';
import useStyles from './styles';
import SearchField from './SearchField';
import SearchResult from './SearchResult';
import SubjectsBar from './SubjectsBar';

const ExploreLayout = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = React.useState('');

  const handleSearchChange = val => setKeyword(val);

  return (
    <Container maxWidth="xl" className={classes.layoutContainer}>
      <Paper className={classes.searchBoxContainer}>
        <SubjectsBar />
        <Divider />
        <SearchField
          className={classes.searchField}
          onChange={_.debounce(handleSearchChange, 300)}
        />
      </Paper>
      <Paper className={classes.resultContainer}>
        <SearchResult keyword={keyword} className={classes.searchResult} />
      </Paper>
    </Container>
  );
};

export default ExploreLayout;
