import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import subjects from './subjects';
import courses from './courses';

export default combineReducers({
  user,
  runtime,
  subjects,
  courses,
});
