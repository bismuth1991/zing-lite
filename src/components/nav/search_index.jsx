import React from 'react';
import { shape, arrayOf, number, string, func } from 'prop-types';

import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor() {
    super();

    this.handleChangeSong = this.handleChangeSong.bind(this);
  }

  handleChangeSong(id) {
    const { changeSong } = this.props;
    return () => {
      changeSong(id);
    };
  }

  render() {
    const { songs } = this.props;

    return (
      <ul className="Col-List">
        {songs.map(song => (
          <li
            className="Col-List__Item"
            key={song.id}
            role="presentation"
            onClick={this.handleChangeSong(song.id)}
          >
            <SearchIndexItem
              {...song}
            />
          </li>
        ))}
      </ul>
    );
  }
}

SearchIndex.propTypes = {
  changeSong: func.isRequired,
  songs: arrayOf(shape({
    id: number,
    title: string,
    url: string,
    artist: string,
    artistAvatar: string,
    album: string,
    coverImage: string,
  })).isRequired,
};

export default SearchIndex;
