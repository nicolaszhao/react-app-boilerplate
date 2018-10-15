import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from 'react-tote-box';
import { isEmpty } from 'lodash';
import ErrorMessage from 'components/ErrorMessage';
import { actions } from './reducers';
import style from './user.scss';

class User extends Component {
  handleFetchClick = () => {
    this.props.fetchUser(Math.ceil(Math.random() * 100));
  }

  render() {
    const { user: { fetching, data, error } } = this.props;

    return (
      <div className="container">
        <header className={style.header}>
          <h2>User</h2>
        </header>
        <section className={style.content}>
          <button onClick={this.handleFetchClick}>Fetch Data</button>
          <Loading visible={fetching} />
          <ErrorMessage error={error} />
          {!isEmpty(data) &&
            <dl>
              <dt>name</dt>
              <dd>{data.name}</dd>
              <dt>email</dt>
              <dd>{data.email}</dd>
              <dt>age</dt>
              <dd>{data.age}</dd>
            </dl>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(actions.fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
