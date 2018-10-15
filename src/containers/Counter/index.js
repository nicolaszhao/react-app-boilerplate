import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './reducers';
import style from './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 1
    };
  }

  handleAmountChange = ({ target }) => {
    this.setState({ amount: +target.value });
  }

  render() {
    const { amount } = this.state,
      { counter, increment, decrement, incrementAsync } = this.props;

    return (
      <div className={style.container}>
        <header className={style.header}>
          <h2>Counter</h2>
        </header>
        <section className={style.content}>
          <div className={style.control}>
            <input value={amount} onChange={this.handleAmountChange} />
            <button onClick={() => incrementAsync()}>Async</button>
            <button onClick={() => increment(amount)}>+</button>
            <button onClick={() => decrement(amount)}>-</button>
          </div>
          <div className={style.result}>
            {counter}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter: counter.counter });
const mapDispatchToProps = dispatch => ({
  incrementAsync: () => dispatch(actions.incrementAsync()),
  increment: amount => dispatch(actions.increment(amount)),
  decrement: amount => dispatch(actions.decrement(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
