import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Loading } from 'react-tote-box';
import ErrorMessage from 'components/ErrorMessage';
import { actions } from './reducers';
import style from './user.scss';

const generateUserId = () => Math.ceil(Math.random() * 100);

const User = ({ user: { fetching, data, error }, fetchUser }) => {
  const [userId, setUserId] = useState(generateUserId());

  useEffect(() => {
    console.log(`fetch user info with userId: ${userId}`);
    fetchUser(userId);
  }, [userId]);

  return (
    <div className="container">
      <header className={style.header}>
        <h2>User</h2>
      </header>
      <section className={style.content}>
        <button onClick={() => setUserId(generateUserId())}>Change User</button>
        <dl>
          <dt>name</dt>
          <dd>{data.name}</dd>
          <dt>email</dt>
          <dd>{data.email}</dd>
          <dt>age</dt>
          <dd>{data.age}</dd>
        </dl>
        <Loading visible={fetching} />
        <ErrorMessage error={error} />
      </section>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(actions.fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
