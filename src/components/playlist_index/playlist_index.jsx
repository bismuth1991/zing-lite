import React from 'react';
import { shape, arrayOf, number, string, func } from 'prop-types';

import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  constructor() {
    super();

    this.handleChangeSong = this.handleChangeSong.bind(this);
  }

  handleChangeSong() {
    const { id, changeSong } = this.props;
    changeSong(id);
  }

  render() {
    const {
      songs,
      playingSongId,
    } = this.props;

    const isPlaying = (songId, playingId) => (
      songId === playingId ? 'playing' : ''
    );

    return (
      <ul>
        {songs.map(song => (
          <li
            className={`Grid-cell u-full ${isPlaying(song.id, playingSongId)}`}
            key={song.id}
            role="presentation"
            onClick={this.handleChangeSong}
          >
            <PlaylistIndexItem {...song} />
          </li>
        ))}
      </ul>
    );
  }
}

PlaylistIndex.propTypes = {
  playingSongId: number.isRequired,
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
