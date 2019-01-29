import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchQueryData, clearSearchResults } from '../../actions/search_bar_actions';

const mapDispatchToProps = dispatch => ({
  fetchQueryData: query => dispatch(fetchQueryData(query)),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

const SearchBarContainer = connect(
  null,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
