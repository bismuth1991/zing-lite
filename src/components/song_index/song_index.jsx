import React from 'react';
import { func, arrayOf, shape, number, string } from 'prop-types';

import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor() {
    super();

    this.state = { offSet: 20 };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    const { offSet } = this.state;
    if (offSet > 35) return;

    const { fetchSomeSongs } = this.props;
    const { scrollHeight, scrollTop, clientHeight } = e.target;

    if (scrollHeight - scrollTop <= clientHeight + 1) {
      fetchSomeSongs(offSet);
      this.setState(state => ({
        offSet: state.offSet + 20,
      }));
    }
  }

  render() {
    const { songs, forward, userClickPlay } = this.props;

    return (
      <ul className="SongIndexContainer" onScroll={this.handleScroll}>
        {songs.map(song => (
          <li className="SongIndexItem" key={song.id}>
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
