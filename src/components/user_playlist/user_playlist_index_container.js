import { connect } from 'react-redux';

import UserPlaylistIndex from './user_playlist_index';
import { startPlaylist } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities, session }) => ({
  userPlaylists: Object.values(entities.userPlaylists).reverse(),
  user: session.user,
});

const mapDispatchToProps = dispatch => ({
  play: (songIds, playlistId) => dispatch(startPlaylist(songIds, playlistId)),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylistIndex);

export default UserPlaylistContainer;
