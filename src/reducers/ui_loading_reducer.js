import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';

const initialState = {
  homePage: true,
  profilePage: true,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        homePage: false,
      };
    case RECEIVE_USER_PLAYLISTS:
      return {
        ...state,
        profilePage: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
