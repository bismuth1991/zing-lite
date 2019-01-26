import React from 'react';
import { bool } from 'prop-types';

class SearchBar extends React.Component {
  componentDidMount() {}

  render() {
    const { isLoggedIn } = this.props;

    return (
      <form className="Nav-Search">
        {!isLoggedIn ? (
          <input
            type="text"
            placeholder="Search for songs..."
          />) : (
            <button type="button">
              <i className="fa fa-search" />
            </button>
        )}
      </form>
    );
  }
}

SearchBar.propTypes = {
  isLoggedIn: bool.isRequired,
};

export default SearchBar;
