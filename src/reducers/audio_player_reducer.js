import {
  FORWARD,
  BACKWARD,
  SHUFFLE,
  USER_CLICK_PLAY,
  CHANGE_SONG,
  REMOVE_SONG,
  START_PLAYLIST,
} from '../actions/audio_player_actions';

import {
  forwardLogic,
  backwardLogic,
  shuffleLogic,
  removeSongLogic,
} from '../utils/audio_player_utils';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import { RECEIVE_USER_PLAYLIST } from '../actions/user_playlist_actions';


const initialState = {
  playingSongIndex: 0,
  songIds: [2],
  prevSongIndex: 0,
  playedSongIndices: [],
  currentPlaylist: 0,
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
    case REMOVE_SONG: {
      const newState = removeSongLogic(state, action);
      return newState;
    }
    case START_PLAYLIST: {
      return {
        ...initialState,
        songIds: action.songIds,
        currentPlaylist: action.playlistId,
      };
    }
    case RECEIVE_USER_PLAYLIST: {
      return {
        ...state,
        currentPlaylist: parseInt(Object.keys(action.payload.data)[0], 10),
      };
    }
    case RECEIVE_USER_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default audioPlayerReducer;
