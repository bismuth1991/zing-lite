import { connect } from 'react-redux';

import { getCurrentSongInfo, isEndOfLoop } from '../../selectors/audio_player_selectors';
import { forward, backward, shuffle } from '../../actions/audio_player_actions';

import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  ...getCurrentSongInfo(state),
  isEndOfLoop: isEndOfLoop(state),
});

const mapDispatchToProps = dispatch => ({
  forward: () => dispatch(forward()),
  backward: () => dispatch(backward()),
  shuffle: () => dispatch(shuffle()),
});

const AudioPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);

export default AudioPlayerContainer;
