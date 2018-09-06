import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import cns from 'classnames';
import { APP_BASE_URL } from 'config/base-url';
import Counter from './Counter';
import About from './About';
import NoMatch from './NoMatch';
import style from './app.scss';

const NavItem = ({ label, to, activeOnlyWhenExact }) => (
  <li>
    <NavLink
      to={to}
      exact={activeOnlyWhenExact}
      activeClassName={style.active}
    >
      {label}
    </NavLink>
  </li>
);

const Container = () => (
  <div className={cns('container', style.container)}>
    <header className={style.header}>
      <h1>React Redux (Ultimate)</h1>
    </header>
    <div className={style.content}>
      <Switch>
        <Redirect
          from="/"
          to="/counter"
          exact
        />
        <Route
          path="/counter"
          component={Counter}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route component={NoMatch} />
      </Switch>
    </div>
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul>
          <NavItem to="/counter" label="Counter" />
          <NavItem to="/about" label="About" />
        </ul>
      </nav>
    </footer>
  </div>
);

const App = () => (
  <Router basename={APP_BASE_URL}>
    <Route component={Container} />
  </Router>
);

export default hot(module)(App);
