import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import cns from 'classnames';
import { APP_BASE_URL } from 'config/base-url';
import Home from './Home';
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
    <div className={style.content}>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/about"
          component={About}
        />
        <Route component={NoMatch} />
      </Switch>
    </div>
    <ul className={style.nav}>
      <NavItem to="/" label="Home" activeOnlyWhenExact />
      <NavItem to="/about" label="About" />
    </ul>
  </div>
);

const App = () => (
  <Router basename={APP_BASE_URL}>
    <Route component={Container} />
  </Router>
);

export default hot(module)(App);
