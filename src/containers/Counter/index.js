import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { actions } from './reducers';
import RootContext from 'components/Contexts/RootContext';
import style from './counter.scss';

const Counter = ({ 
  counter, 
  increment, 
  decrement, 
  incrementAsync 
}) => {
  const [amount, setAmount] = useState(1);
  const context = useContext(RootContext);

  if (counter > 11) {

    // test for Error Boundaries
    throw new Error('Counter crashed!');
  }

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h2>Counter / Author: {context.author}</h2>
      </header>
      <section className={style.content}>
        <div className={style.control}>
          <input value={amount} onChange={({ target }) => setAmount(+target.value)} />
          <button onClick={() => incrementAsync(amount)}>Async</button>
          <button onClick={() => increment(amount)}>+</button>
          <button onClick={() => decrement(amount)}>-</button>
        </div>
        <div className={style.result}>
          {counter}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({ counter: counter.counter });
const mapDispatchToProps = dispatch => ({
  incrementAsync: amount => dispatch(actions.incrementAsync(amount)),
  increment: amount => dispatch(actions.increment(amount)),
  decrement: amount => dispatch(actions.decrement(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
