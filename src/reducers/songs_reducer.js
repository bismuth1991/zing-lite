import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';
import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';

const initialState = {
  2: {
    id: 2,
    title: 'Roi Xa De Truong Thanh',
    url: 'https://www.dropbox.com/s/h1cthpxik696m43/RoiXaDeTruongThanh.mp3?dl=1',
    artistId: 13,
    albumId: 18,
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
