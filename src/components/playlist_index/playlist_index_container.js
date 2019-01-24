import { connect } from 'react-redux';

import { getPlaylistSongsInfo, getPlayingSongId } from '../../selectors/song_selectors';
import PlaylistIndex from './playlist_index';
import { changeSong } from '../../actions/audio_player_actions';

const mapStateToProps = state => ({
  songs: getPlaylistSongsInfo(state),
  playingSongId: getPlayingSongId(state),
});

const mapDispatchToProps = dispatch => ({
  changeSong: songId => dispatch(changeSong(songId)),
});

const PlaylistIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistIndex);

export default PlaylistIndexContainer;
