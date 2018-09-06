import { createStore, combineReducers } from 'redux';
import counter from './Counter/reducers';
import about from './About/reducers';

const rootReducer = combineReducers({
  counter,
  about
});

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
