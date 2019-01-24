import React from 'react';
import { shape, arrayOf, number, string, func } from 'prop-types';

import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {}

  render() {
    const {
      songs,
      playingSongId,
      userClickPlay,
      forward,
    } = this.props;

    return (
      <ul>
        {songs.map(song => (
          <li className="Grid-cell u-full" key={song.id}>
            <PlaylistIndexItem
              {...song}
              playingSongId={playingSongId}
              userClickPlay={userClickPlay}
              forward={forward}
            />
          </li>
        ))}
      </ul>
    );
  }
}

PlaylistIndex.propTypes = {
  playingSongId: number.isRequired,
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

export default PlaylistIndex;
