import {
  RECEIVE_USER_PLAYLISTS,
  REMOVE_USER_PLAYLIST,
  RECEIVE_USER_PLAYLIST,
} from '../actions/user_playlist_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const userPlaylistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_PLAYLISTS:
      return {
        ...state,
        ...action.payload.data.playlists,
      };
    case RECEIVE_USER_PLAYLIST:
      return {
        ...state,
        ...action.payload.data,
      };
    case REMOVE_USER_PLAYLIST: {
      const newState = { ...state };
      delete newState[action.playlistId];

      return newState;
    }
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userPlaylistsReducer;
