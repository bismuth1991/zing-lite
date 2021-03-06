import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';
import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';

const initialState = {
  13: {
    id: 13,
    name: 'Duy Zuno',
    avatarUrl: 'https://www.dropbox.com/s/239urccuwvke063/DuyZuno.jpg?dl=1',
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.data.artists,
      };
    case RECEIVE_USER_PLAYLISTS:
      return {
        ...state,
        ...action.payload.data.artists,
      };
    case RECEIVE_QUERY_DATA:
      return {
        ...state,
        ...action.payload.data.artists,
      };
    default:
      return state;
  }
};

export default artistsReducer;
