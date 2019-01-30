import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';
import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';

const initialState = {
  18: {
    id: 18,
    name: 'Roi Xa De Truong Thanh',
    coverImageUrl: 'https://www.dropbox.com/s/kjd0m5db5al73wx/RoiXaDeTruongThanh.jpg?dl=1',
  },
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.data.albums,
      };
    case RECEIVE_USER_PLAYLISTS:
      return {
        ...state,
        ...action.payload.data.albums,
      };
    case RECEIVE_QUERY_DATA:
      return {
        ...state,
        ...action.payload.data.albums,
      };
    default:
      return state;
  }
};

export default albumsReducer;
