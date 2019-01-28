import { connect } from 'react-redux';

import { getSongInfo } from '../../selectors/song_selectors';
import { changeSong } from '../../actions/audio_player_actions';

import SearchIndex from './search_index';

const mapStateToProps = ({ entities: { songs, artists, albums, searchResults } }) => ({
  songs: searchResults.songIds.map(
    songId => getSongInfo(songs[songId], artists, albums),
  ),
});

const mapDispatchToProps = dispatch => ({
  changeSong: songId => dispatch(changeSong(songId)),
});

const SearchIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchIndex);

export default SearchIndexContainer;
