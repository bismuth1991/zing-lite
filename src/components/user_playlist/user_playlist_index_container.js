import { connect } from 'react-redux';

import { fetchUserPlaylists } from '../../actions/user_playlist_actions';

import UserPlaylistIndex from './user_playlist_index';
import { startPlaylist } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities, session }) => ({
  userPlaylists: Object.values(entities.userPlaylists).reverse(),
  user: session.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId)),
  play: songIds => dispatch(startPlaylist(songIds)),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylistIndex);

export default UserPlaylistContainer;
