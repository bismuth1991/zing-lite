import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';
import { fetchUserPlaylists } from '../../actions/user_playlist_actions';

import RootPage from './root_page';

const mapStateToProps = ({ session }) => ({
  userId: session.user.userId,
});

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(RootPage);
