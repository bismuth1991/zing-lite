import * as APIUtils from '../utils/session_utils';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

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

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

const processServerRes = (res) => {
  const user = { userId: res.data.id, username: res.data.username };

  sessionStorage.setItem('CSRF-TOKEN', res.data.csrfToken);
  sessionStorage.setItem('username', user.username);
  sessionStorage.setItem('userId', user.userId);

  return user;
};

export const login = user => dispatch => APIUtils.login(user)
  .then(res => dispatch(
    receiveCurrentUser(processServerRes(res)),
  ))
  .catch(err => dispatch(receiveSessionErrors(err.response.data)));

export const signup = user => dispatch => APIUtils.signup(user)
  .then(res => dispatch(
    receiveCurrentUser(processServerRes(res)),
  ))
  .catch(err => dispatch(receiveSessionErrors(err.response.data)));

export const logout = () => (dispatch) => {
  dispatch(logoutUser());
};
