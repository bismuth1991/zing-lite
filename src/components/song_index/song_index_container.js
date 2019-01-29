import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { getSongsInfo } from '../../selectors/song_selectors';
import { forward, userClickPlay } from '../../actions/audio_player_actions';

const mapStateToProps = state => ({
  songs: getSongsInfo(state),
  loading: state.ui.loading.homePageLoading,
});

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
  forward: () => dispatch(forward()),
  userClickPlay: songId => dispatch(userClickPlay(songId)),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default SongIndexContainer;
