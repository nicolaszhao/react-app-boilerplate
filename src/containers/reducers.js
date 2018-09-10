import { combineReducers } from 'redux';
import counter from './Counter/reducers';
import user from './User/reducers';

export default combineReducers({
  counter,
  user
});
