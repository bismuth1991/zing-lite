import { connect } from 'react-redux';

import { createPlaylist, editPlaylist } from '../../actions/user_playlist_actions';
import { getPlaylistId, getPlaylistName } from '../../selectors/playlist_selectors';

import PlaylistFrom from './playlist_form';

const mapStateToProps = (state) => {
  const playlistId = getPlaylistId(state);
  const playlistName = getPlaylistName(state, playlistId);

  return {
    userId: state.session.user.userId,
    playlistId,
    playlistName,
  };
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: songIds => dispatch(createPlaylist(songIds)),
  editPlaylist: (playlistId, playlistData) => dispatch(editPlaylist(playlistId, playlistData)),
});

const PlaylistFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistFrom);

export default PlaylistFormContainer;
