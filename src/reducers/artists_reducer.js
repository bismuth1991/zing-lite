import { RECEIVE_SONGS } from '../actions/song_actions';

const initialState = {
  7: {
    id: 7,
    name: 'Quang Dung',
    avatarUrl: 'https://www.dropbox.com/s/vcb2rfo9ohzzd62/QuangDung.jpg?dl=1',
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.payload.data.artists,
      };
    default:
      return state;
  }
};

export default artistsReducer;
