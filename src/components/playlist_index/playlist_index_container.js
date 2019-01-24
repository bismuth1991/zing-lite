import { connect } from 'react-redux';

import { getPlaylistSongsInfo, getPlayingSongId } from '../../selectors/song_selectors';
import PlaylistIndex from './playlist_index';

const mapStateToProps = state => ({
  songs: getPlaylistSongsInfo(state),
  playingSongId: getPlayingSongId(state),
});

const PlaylistIndexContainer = connect(
  mapStateToProps,
  null,
)(PlaylistIndex);

export default PlaylistIndexContainer;
