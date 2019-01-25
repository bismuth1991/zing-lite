import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const initialState = {
  id: null,
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
