import React from 'react';
import PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';
import useStyles from './styles/SearchField';

const NOOP = () => {};

const SearchField = ({ className, onChange }) => {
  const classes = useStyles();

  return (
    <InputBase
      className={className}
      classes={classes}
      placeholder="Search for courses"
      onChange={e => onChange(e.target.value)}
    />
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};

SearchField.defaultProps = {
  className: '',
  onChange: NOOP,
};

export default SearchField;
