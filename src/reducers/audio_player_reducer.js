import { FORWARD, BACKWARD, SHUFFLE } from '../actions/audio_player_actions';

import {
  forwardLogic,
  backwardLogic,
  shuffleLogic,
} from '../utils/audio_player_utils';


const initialState = {
  playingSongIndex: 0,
  songIds: [2],
  prevSongIndex: 0,
  playedSongIndices: [],
};

const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORWARD: {
      const newState = forwardLogic(state);
      return newState;
    }
    case BACKWARD: {
      const newState = backwardLogic(state);
      return newState;
    }
    case SHUFFLE: {
      const newState = shuffleLogic(state);
      return newState;
    }
    default:
      return state;
  }
};

export default audioPlayerReducer;
