import React from 'react';
import { shape, arrayOf, number, string, func } from 'prop-types';

import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  constructor() {
    super();

    this.handleChangeSong = this.handleChangeSong.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);
  }

  handleChangeSong(id) {
    const { changeSong } = this.props;
    return (e) => {
      e.stopPropagation();
      changeSong(id);
    };
  }

  handleRemoveSong(id) {
    const { removeSong } = this.props;
    return (e) => {
      e.stopPropagation();
      removeSong(id);
    };
  }

  render() {
    const {
      songs,
      playingSongId,
    } = this.props;

    return (
      <ul className="PlaylistIndexContainer">
        {songs.map(song => (
          <li
            className={`
              PlaylistIndexItem 
              ${song.id === playingSongId ? 'playing' : ''}
            `}
            key={song.id}
            role="presentation"
            onClick={this.handleChangeSong(song.id)}
          >
            <PlaylistIndexItem
              {...song}
              isPlaying={song.id === playingSongId}
              handleRemoveSong={this.handleRemoveSong}
            />
          </li>
        ))}
      </ul>
    );
  }
}

PlaylistIndex.propTypes = {
  playingSongId: number.isRequired,
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

export default PlaylistIndex;
