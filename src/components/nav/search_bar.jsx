import React from 'react';

class SearchBar extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <form className="Nav-Search">
        <input
          type="text"
          placeholder="Search for songs..."
        />
      </form>
    );
  }
}

export default SearchBar;
