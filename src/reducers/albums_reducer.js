import { RECEIVE_SONGS } from '../actions/song_actions';

const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.data.albums,
      };
    default:
      return state;
  }
};

export default albumsReducer;
