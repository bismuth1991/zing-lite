import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .catch(err => dispatch(receiveSessionErrors(err.response.data)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .catch(err => dispatch(receiveSessionErrors(err.response.data)))
);

export const logout = () => (dispatch) => {
  dispatch(logoutUser());
};
