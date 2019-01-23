import React from 'react';
import { func, arrayOf, shape, number, string } from 'prop-types';

import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor() {
    super();

    this.state = { offSet: 20 };

    this.fetchMoreSongs = this.fetchMoreSongs.bind(this);
    window.addEventListener('scroll', this.fetchMoreSongs);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fetchMoreSongs);
  }

  fetchMoreSongs() {
    const { fetchSomeSongs } = this.props;
    const { offSet } = this.state;

    if (offSet > 35) return;

    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;

    if (innerHeight + scrollTop > offsetHeight - 1) {
      fetchSomeSongs(offSet);
      this.setState(state => ({
        offSet: state.offSet + 20,
      }));
    }
  }

  render() {
    const { songs } = this.props;

    return (
      <ul className="Grid Grid--justifyCenter">
        {songs.map(song => (
          <li className="Grid-cell Grid-cell--autoSize" key={song.id}>
            <SongIndexItem {...song} />
          </li>
        ))}
      </ul>
    );
  }
}

SongIndex.propTypes = {
  fetchSomeSongs: func.isRequired,
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
