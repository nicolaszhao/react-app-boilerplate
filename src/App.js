import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import RootContext from './components/Contexts/RootContext';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './app.scss';

const About = React.lazy(() => import('./pages/About'));

const App = () => {
  useEffect(() => {
    // for element:active
    document.body.addEventListener('touchstart', () => {});
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <RootContext.Provider value={{ author: 'Nicolas' }}>
        <ErrorBoundary>
          <div className="container">
            <h1>React App Boilerplate</h1>
            <nav className="nav">
              <ul>
                <li>
                  <NavLink to="/" activeClassName="active" exact>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="content">
              <React.Suspense fallback={<div className="loading">Loading...</div>}>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/about" component={About} />
                  <Route component={NoMatch} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ErrorBoundary>
      </RootContext.Provider>
    </Router>
  );
};

export default hot(App);
