import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';
import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';

const initialState = {
  2: {
    id: 2,
    title: 'Ha Trang',
    url: 'https://www.dropbox.com/s/ezijh6nzgutwah9/HaTrang.mp3?dl=1',
    artistId: 7,
    albumId: 12,
  },
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.data.songs,
      };
    case RECEIVE_USER_PLAYLISTS:
      return {
        ...state,
        ...action.payload.data.songs,
      };
    case RECEIVE_QUERY_DATA:
      return {
        ...state,
        ...action.payload.data.songs,
      };
    default:
      return state;
  }
};

export default songsReducer;
