import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './reducers';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(actions.increment());
}

export default function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}
