import {
  FORWARD,
  BACKWARD,
  SHUFFLE,
  USER_CLICK_PLAY,
  CHANGE_SONG,
} from '../actions/audio_player_actions';

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
    case USER_CLICK_PLAY: {
      const { songIds, playingSongIndex } = state;
      let newSongIds = songIds.slice();

      // remove song if repeated
      newSongIds = newSongIds.filter(id => id !== action.songId);
      newSongIds = [
        ...newSongIds.slice(0, playingSongIndex + 1),
        action.songId,
        ...newSongIds.slice(playingSongIndex + 2, newSongIds.length),
      ];

      return {
        ...state,
        songIds: newSongIds,
      };
    }
    case CHANGE_SONG: {
      return {
        ...state,
        playingSongIndex: state.songIds.indexOf(action.songId),
      };
    }
    default:
      return state;
  }
};

export default audioPlayerReducer;
