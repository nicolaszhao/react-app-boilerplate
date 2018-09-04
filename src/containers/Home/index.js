import React, { Component } from 'react';
import { Loading } from 'react-tote-box';
import Example from 'components/Example';
import * as api from 'api'; 
import style from './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    api.getUser()
      .then(data => console.log(data))
      .catch(err => console.log(err))
      .then(() => this.setState({ loading: false }));
  }
  
  render() {
    return (
      <div className="container">
        <header className={style.header}>
          <h1>Home</h1>
        </header>
        <section className={style.content}>
          <Example>
            <span>Example Component</span>
          </Example>
        </section>
        <Loading visible={this.state.loading} />
      </div>
    );
  }
}

export default Home;
