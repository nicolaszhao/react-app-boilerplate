import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../reducers/counter';

export function* incrementAsync({ payload }) {
  yield call(delay, 1000);
  yield put(actions.increment(payload.amount));
}

export default function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}
