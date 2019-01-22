import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';

import RootPage from './root_page';

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
});

export default connect(
  null,
  mapDispatchtoProps,
)(RootPage);
