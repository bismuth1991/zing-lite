import React from 'react';
import { func, arrayOf, shape, number, string, bool } from 'prop-types';

import LoadIcon from '../utils/loading_icon';
import SongIndexItemContainer from './song_index_item_container';

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
    const { songs, loading } = this.props;

    return !loading
      ? (
        <ul className="Row-List" onScroll={this.handleScroll}>
          {songs.map(song => (
            <li className="Row-List__Item song-index-item" key={song.id}>
              <SongIndexItemContainer {...song} />
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
