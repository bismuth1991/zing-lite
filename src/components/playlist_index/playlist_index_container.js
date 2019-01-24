import { connect } from 'react-redux';

import { getPlaylistSongsInfo } from '../../selectors/song_selectors';
import PlaylistIndex from './playlist_index';

const mapStateToProps = state => ({
  songs: getPlaylistSongsInfo(state),
  playingSongIndex: state.session.audioPlayer.playingSongIndex,
});

const PlaylistIndexContainer = connect(
  mapStateToProps,
  null,
)(PlaylistIndex);

export default PlaylistIndexContainer;
