import { all } from 'redux-saga/effects';
import watchUser from './user';
import watchIncrementAsync from './counter';

export default function* rootSaga() {
  yield all([
    watchUser(),
    watchIncrementAsync(),
  ]);
}
