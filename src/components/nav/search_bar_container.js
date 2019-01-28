import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchQueryData, receiveQueryData } from '../../actions/search_bar_actions';
import { getSongInfo } from '../../selectors/song_selectors';

const mapStateToProps = ({ entities: { songs, artists, albums, searchBar } }) => ({
  songsInfo: searchBar.songIds.map(
    songId => getSongInfo(songs[songId], artists, albums),
  ),
});

const mapDispatchToProps = dispatch => ({
  fetchQueryData: query => dispatch(fetchQueryData(query)),
  receiveQueryData: payload => dispatch(receiveQueryData(payload)),
});

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
