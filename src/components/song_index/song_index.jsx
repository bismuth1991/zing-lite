import React from 'react';
import { func, arrayOf, shape, number, string } from 'prop-types';

import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor() {
    super();

    this.state = { offSet: 20 };

    this.fetchMoreSongs = this.fetchMoreSongs.bind(this);
  }

  componentDidMount() {
    const songIndex = document.getElementById('song-index');
    this.scrollListener = songIndex.addEventListener('scroll', this.fetchMoreSongs);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  fetchMoreSongs() {
    const { fetchSomeSongs } = this.props;
    const { offSet } = this.state;

    if (offSet > 35) return;

    const songIndex = document.getElementById('song-index');
    const { scrollTop, offsetHeight, scrollHeight } = songIndex;

    if (offsetHeight + scrollTop > scrollHeight - 1) {
      fetchSomeSongs(offSet);
      this.setState(state => ({
        offSet: state.offSet + 20,
      }));
    }
  }

  render() {
    const { songs, forward, userClickPlay } = this.props;

    return (
      <ul className="Grid Grid--justifyCenter">
        {songs.map(song => (
          <li className="Grid-cell u-1of2" key={song.id}>
            <SongIndexItem
              {...song}
              userClickPlay={userClickPlay}
              forward={forward}
            />
          </li>
        ))}
      </ul>
    );
  }
}

SongIndex.propTypes = {
  fetchSomeSongs: func.isRequired,
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

export default SongIndex;
