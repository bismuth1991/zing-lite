import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { getSongsInfo } from '../../selectors/song_selector';

const mapStateToProps = state => ({
  songs: getSongsInfo(state),
});

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default SongIndexContainer;
