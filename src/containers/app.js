import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, Route, Redirect, NavLink, Switch 
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Loading } from 'react-tote-box';
import cns from 'classnames';
import { APP_BASE_URL } from 'config/base-url';
import NoMatch from './NoMatch';
import RootContext from 'components/Contexts/RootContext';
import style from './app.scss';

const User = React.lazy(() => import('./User'));
const Counter = React.lazy(() => import('./Counter'));

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

const Container = () => {
  useEffect(() => {
    const handleDocumentTouchstart = () => {};

    // for element:active
    document.body.addEventListener('touchstart', handleDocumentTouchstart);

    return () => {
      document.body.removeEventListener('touchstart', handleDocumentTouchstart);
    };
  }, []);

  return (
    <RootContext.Provider value={{ author: 'Nicolas' }}>
      <div className={cns('container', style.container)}>
        <header className={style.header}>
          <h1>React Boilerplate - Ultimate</h1>
        </header>
        <div className={style.content}>
          <React.Suspense fallback={<Loading visible />}>
            <Switch>
              <Redirect from="/" to="/counter" exact />
              <Route path="/counter" component={Counter} />
              <Route path="/user" component={User} />
              <Route component={NoMatch} />
            </Switch>
          </React.Suspense>
        </div>
        <footer className={style.footer}>
          <nav className={style.nav}>
            <ul>
              <NavItem to="/counter" label="Counter" />
              <NavItem to="/user" label="User" />
            </ul>
          </nav>
        </footer>
      </div>
    </RootContext.Provider>
  );
}; 

const App = () => (
  <Router basename={APP_BASE_URL}>
    <Route component={Container} />
  </Router>
);

export default hot(module)(App);
