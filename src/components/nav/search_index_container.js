import { connect } from 'react-redux';

import { getSongInfo } from '../../selectors/song_selectors';

import SearchIndex from './search_index';
import { forward, userClickPlay } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities: { songs, artists, albums, searchResults } }) => ({
  songs: searchResults.songIds.map(
    songId => getSongInfo(songs[songId], artists, albums),
  ),
});

const mapDispatchToProps = dispatch => ({
  forward: () => dispatch(forward()),
  userClickPlay: songId => dispatch(userClickPlay(songId)),
});

const SearchIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchIndex);

export default SearchIndexContainer;
