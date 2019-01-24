import { connect } from 'react-redux';

import PlaylistIndex from './playlist_index';

const mapStateToProps = ({ session: { audioPlayer } }) => ({
  songIds: audioPlayer.songIds,
  playingSongIndex: audioPlayer.playingSongIndex,
});

const PlaylistIndexContainer = connect(
  mapStateToProps,
  null,
)(PlaylistIndex);

export default PlaylistIndexContainer;
