import { connect } from 'react-redux';

import { createPlaylist, editPlaylist } from '../../actions/user_playlist_actions';

import PlaylistFrom from './playlist_form';

const mapStateToProps = ({ session }) => ({
  userId: session.user.userId,
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: songIds => dispatch(createPlaylist(songIds)),
  editPlaylist: playlistId => dispatch(editPlaylist(playlistId)),
});

const PlaylistFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistFrom);

export default PlaylistFormContainer;
