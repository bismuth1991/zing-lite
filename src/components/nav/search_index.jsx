import React from 'react';
import { shape, arrayOf, number, string, func } from 'prop-types';

import SearchIndexItem from './search_index_item';
import SearchBarContainer from './search_bar_container';

class SearchIndex extends React.Component {
  constructor() {
    super();

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(songId) {
    const { userClickPlay, forward } = this.props;
    return () => {
      userClickPlay(songId);
      forward();
    };
  }

  render() {
    const { songs } = this.props;

    return (
      <>
        <SearchBarContainer />

        <ul className="Col-List">
          {songs.map(song => (
            <li
              className="Col-List__Item"
              key={song.id}
              role="presentation"
              onClick={this.handlePlay(song.id)}
            >
              <SearchIndexItem
                {...song}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

SearchIndex.propTypes = {
  userClickPlay: func.isRequired,
  forward: func.isRequired,
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
