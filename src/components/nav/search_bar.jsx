import React from 'react';
import { func } from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = { query: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ query: '' });
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });

    const { fetchQueryData } = this.props;
    const query = e.target.value;

    if (query && query !== '') {
      fetchQueryData(query);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <form className="Input-Form" onSubmit={e => e.preventDefault()}>
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
};

export default SearchBar;
