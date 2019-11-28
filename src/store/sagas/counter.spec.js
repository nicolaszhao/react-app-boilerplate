import { expect } from 'chai';
import { call, delay } from 'redux-saga/effects';
import { incrementAsync } from './counter';

describe('#Counter saga.js', () => {
  describe('#incrementAsync()', () => {
    it('incrementAsync Saga must call delay(1000)', () => {
      const payload = { amount: 1 };
      const gen = incrementAsync({ payload });
      expect(gen.next().value).to.deep.equal(delay(1000));
    });
  });
});
