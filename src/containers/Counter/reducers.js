import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = { counter: 10 };

export const actions = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount }),
  INCREMENT_ASYNC: (amount = 1) => ({ amount })
});

const { increment, decrement } = actions;

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (state, { payload: { amount } }) => {
      return {
        ...state,
        counter: state.counter + amount
      };
    }
  }, 
  defaultState);

export default reducer;
