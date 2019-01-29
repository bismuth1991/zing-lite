import React from 'react';
import { func } from 'prop-types';
import { debounce } from 'debounce';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.debounceSearch = debounce(query => props.fetchQueryData(query), 500);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.debounceSearch.flush();
    this.setState({ query: '' });
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });

    const { clearSearchResults } = this.props;
    const query = e.target.value;

    if (query && query !== '') {
      this.debounceSearch(query);
    } else {
      this.debounceSearch.clear();
      clearSearchResults();
    }
  }

  render() {
    const { query } = this.state;

    return (
      <form className="Input-Form" onSubmit={this.handleSubmit}>
        <input
          className="Input-Form__Input"
          type="text"
          placeholder="Search for songs here..."
          value={query}
          onChange={this.handleChange}
        />

        <div className="Input-Form__Buttons">
          <button type="button" onClick={this.handleSubmit}>
            <h6>Search</h6>
          </button>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchQueryData: func.isRequired,
  clearSearchResults: func.isRequired,
};

export default SearchBar;
