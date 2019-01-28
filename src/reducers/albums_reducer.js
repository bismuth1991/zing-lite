import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';

const initialState = {
  12: {
    id: 12,
    name: 'Goi Giac Mo Xua',
    coverImageUrl: 'https://www.dropbox.com/s/8qz1syuymksj5kt/GoiGiacMoXua.jpg?dl=1',
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
    default:
      return state;
  }
};

export default albumsReducer;
