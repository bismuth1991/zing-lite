import React from 'react';
import { func, arrayOf, shape, number, string, bool } from 'prop-types';

import SongIndexItem from './song_index_item';
import LoadIcon from '../utils/loading_icon';

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
    const { songs, forward, userClickPlay, loading } = this.props;

    return !loading
      ? (
        <ul className="Row-List" onScroll={this.handleScroll}>
          {songs.map(song => (
            <li className="Row-List__Item" key={song.id}>
              <SongIndexItem
                {...song}
                userClickPlay={userClickPlay}
                forward={forward}
              />
            </li>
          ))}
        </ul>
      )
      : <LoadIcon loading={loading} />;
  }
}

SongIndex.propTypes = {
  fetchSomeSongs: func.isRequired,
  userClickPlay: func.isRequired,
  forward: func.isRequired,
  loading: bool.isRequired,
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
