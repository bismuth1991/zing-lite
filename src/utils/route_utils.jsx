import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../selectors/session_selectors';

const Auth = ({
  component: Component, path, loggedIn, exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/profile" />
      )
    )}
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/profile/login" />
      )
    )}
  />
);

const mapStateToProps = state => ({ loggedIn: isLoggedIn(state) });

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
