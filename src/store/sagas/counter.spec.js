import { expect } from 'chai';
import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { incrementAsync } from './counter';

describe('#Counter saga.js', () => {
  describe('#incrementAsync()', () => {
    it('incrementAsync Saga must call delay(1000)', () => {
      const gen = incrementAsync();

      expect(gen.next().value).to.deep.equal(call(delay, 1000));
    });
  });
});
