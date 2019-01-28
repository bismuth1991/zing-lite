import {
  RECEIVE_USER_PLAYLISTS,
  REMOVE_USER_PLAYLIST,
  RECEIVE_USER_PLAYLIST,
} from '../actions/user_playlist_actions';

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
    default:
      return state;
  }
};

export default userPlaylistsReducer;
