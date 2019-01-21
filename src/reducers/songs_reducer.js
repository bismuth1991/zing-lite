import { RECEIVE_SONGS } from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.data.songs,
      };
    default:
      return state;
  }
};

export default songsReducer;
