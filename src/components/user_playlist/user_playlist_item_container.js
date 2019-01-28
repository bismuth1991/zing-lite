import { connect } from 'react-redux';

import { deleteUserPlaylist } from '../../actions/user_playlist_actions';
import { startPlaylist } from '../../actions/audio_player_actions';

import UserPlaylistItem from './user_playlist_index';

const mapDispatchToProps = dispatch => ({
  play: songIds => dispatch(startPlaylist(songIds)),
  deleteUserPlaylist: playlistId => dispatch(deleteUserPlaylist(playlistId)),
});

const UserPlaylistContainer = connect(
  null,
  mapDispatchToProps,
)(UserPlaylistItem);

export default UserPlaylistContainer;
