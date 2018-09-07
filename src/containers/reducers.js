import { combineReducers } from 'redux';
import counter from './Counter/reducers';
import about from './About/reducers';

export default combineReducers({
  counter,
  about
});
