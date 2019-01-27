import { connect } from 'react-redux';

import { fetchUserPlaylists } from '../../actions/user_playlist_actions';

import UserPlaylistIndex from './user_playlist_index';

const mapStateToProps = ({ entities, session }) => ({
  userPlaylists: Object.values(entities.userPlaylists).reverse(),
  user: session.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUserPlaylists: () => dispatch(fetchUserPlaylists()),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylistIndex);

export default UserPlaylistContainer;
