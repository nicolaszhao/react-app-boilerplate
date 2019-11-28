import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { actions as userActions } from '../../store/reducers/user';
import { actions as counterActions } from '../../store/reducers/counter';
import RootContext from '../../components/Contexts/RootContext';
import style from './index.module.scss';

const genUserId = () => Math.ceil(Math.random() * 100);

const Home = ({
  user: { fetching, data: user, error },
  counter: { count },
  fetchUser,
  increment,
  decrement,
  incrementAsync,
}) => {
  const [userId, setUserId] = useState(genUserId());
  const [amount, setAmount] = useState(1);
  const { author } = useContext(RootContext);

  if (count > 11) {
    // Error Boundaries testing...
    throw new Error('Counter crashed!');
  }

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  return (
    <div className={style.container}>
      <h2>Home</h2>
      <section className={style.profile}>
        <h3>User Profile</h3>
        {fetching && <div className="loading">Loading...</div>}
        <dl>
          {Object.keys(user).map((field) => (
            <React.Fragment key={field}>
              <dt>
                {field}
                :
              </dt>
              <dd>{user[field]}</dd>
            </React.Fragment>
          ))}
        </dl>
        {error && (
          <p className={style.error}>
            <strong>Error:</strong>
            {error.message}
          </p>
        )}
        <footer className={style['profile-footer']}>
          <button
            type="button"
            className="button"
            onClick={() => setUserId(genUserId())}
          >
            Refresh
          </button>
        </footer>
      </section>
      <section className={style.counter}>
        <h3>Counter</h3>
        <div className={style['counter-controls']}>
          <label>
            Amount:
          </label>
          <input
            className="input"
            value={amount}
            onChange={({ target }) => setAmount(+target.value)}
          />
          <button
            type="button"
            className="button"
            onClick={() => incrementAsync(amount)}
          >
            Async
          </button>
          <button
            type="button"
            className="button"
            onClick={() => decrement(amount)}
          >
            -
          </button>
          <span className={style['counter-value']}>{count}</span>
          <button
            type="button"
            className="button"
            onClick={() => increment(amount)}
          >
            +
          </button>
        </div>
      </section>
      <footer className={style.footer}>
        <p>
          by
          <span className={style.author}>{author}</span>
        </p>
      </footer>
    </div>
  );
};

const mapStateToProps = ({ user, counter }) => ({ user, counter });
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(userActions.fetchUser(userId)),
  incrementAsync: (amount) => dispatch(counterActions.incrementAsync(amount)),
  increment: (amount) => dispatch(counterActions.increment(amount)),
  decrement: (amount) => dispatch(counterActions.decrement(amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
