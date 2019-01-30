import { connect } from 'react-redux';

import { forward, addSong, userClickPlay } from '../../actions/audio_player_actions';
import { openModal } from '../../actions/modal_actions';

import SongIndexItem from './song_index_item';

const mapStateToProps = ({ session: { audioPlayer } }) => ({
  playlistSongIds: audioPlayer.songIds,
});

const mapDispatchtoProps = dispatch => ({
  forward: () => dispatch(forward()),
  addSong: songId => dispatch(addSong(songId)),
  userClickPlay: songId => dispatch(userClickPlay(songId)),
  openModal: modal => dispatch(openModal(modal)),
});

const SongIndexItemContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndexItem);


export default SongIndexItemContainer;
