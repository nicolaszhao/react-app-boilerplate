import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { actions } from './reducers';
import { fetchUser } from './sagas';

describe('#User saga.js', () => {
  describe('#fetchUser() success', () => {
    const payload = { userId: 123 };
    const gen = fetchUser({ payload });
    const user = {};

    it('fetchUser Saga should yield an Effect put({ type: "FETCH_USER_START" })', () => {
      expect(gen.next().value).to.deep.equal(put(actions.fetchUserStart()));
    });

    it(`fetchUser Saga should yeild an Effect call(api.fetchUser, ${payload.userId})`, () => {
      expect(gen.next().value).to.deep.equal(call(api.fetchUser, payload.userId));
    });

    it(
      `fetchUser Saga should yield an Effect put({ type: "FETCH_USER_COMPLETED", payload: ${JSON.stringify(user)} })`, 
      () => {
        expect(gen.next(user).value).to.deep.equal(put(actions.fetchUserCompleted(user)));
      });
  });

  describe('#fetchUser() failed', () => {
    const payload = { userId: 456 };
    const gen = fetchUser({ payload });
    const error = new Error('Error!');

    it('fetchUser Saga should yield an Effect put({ type: "FETCH_USER_START" })', () => {
      expect(gen.next().value).to.deep.equal(put(actions.fetchUserStart()));
    });

    it(`fetchUser Saga should yeild an Effect call(api.fetchUser, ${payload.userId})`, () => {
      expect(gen.next().value).to.deep.equal(call(api.fetchUser, payload.userId));
    });

    it(
      `fetchUser Saga should yield an Effect put({ type: 'FETCH_USER_COMPLETED', payload: ${error} })`,
      () => {
        expect(gen.throw(error).value).to.deep.equal(put(actions.fetchUserCompleted(error)));
      }
    );
  });
});
