import { combineReducers } from 'redux';

import audioPlayerReducer from './audio_player_reducer';
import userReducer from './user_reducer';

const sessionReducer = combineReducers({
  audioPlayer: audioPlayerReducer,
  user: userReducer,
});

export default sessionReducer;
