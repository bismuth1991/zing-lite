import { connect } from 'react-redux';

import { receiveForward, receiveBackward, receiveShuffle } from '../../actions/audio_player_actions';
import { getCurrentSongInfo, isEndOfLoop } from '../../selectors/audio_player_selector';

import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  ...getCurrentSongInfo(state),
  isEndOfLoop: isEndOfLoop(state),
});

const mapDispatchToProps = dispatch => ({
  forward: () => dispatch(receiveForward()),
  backward: () => dispatch(receiveBackward()),
  shuffle: () => dispatch(receiveShuffle()),
});

const AudioPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);

export default AudioPlayerContainer;
