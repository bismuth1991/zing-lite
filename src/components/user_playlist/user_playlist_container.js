import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserPlaylists, fetchUserPlaylist, deleteUserPlaylist } from '../../actions/user_playlist_actions';
import UserPlaylistIndex from './user_playlist_index';
import { addSongsToList } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities, session }) => ({
  userPlaylists: Object.values(entities.userPlaylists).reverse(),
  user: session.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUserPlaylists: () => dispatch(fetchUserPlaylists()),
  fetchUserPlaylist: playlistId => dispatch(fetchUserPlaylist(playlistId)),
  addSongsToList: songIds => dispatch(addSongsToList(songIds)),
  deleteUserPlaylist: playlistId => dispatch(deleteUserPlaylist(playlistId)),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylistIndex);

export default withRouter(UserPlaylistContainer);
