import { RECEIVE_SONGS } from '../actions/song_actions';

const artistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.artists,
      };
    default:
      return state;
  }
};

export default artistsReducer;
