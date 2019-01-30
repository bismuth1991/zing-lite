import React from 'react';
import { number, string, func, arrayOf } from 'prop-types';

class SongIndexItem extends React.Component {
  constructor() {
    super();

    this.handlePlay = this.handlePlay.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  handlePlay() {
    const { id, userClickPlay, forward } = this.props;
    userClickPlay(id);
    forward();
  }

  handleAddSong() {
    const { id, playlistSongIds, addSong, openModal } = this.props;
    if (playlistSongIds.includes(id)) {
      openModal({
        type: 'TEXT_ALERT',
        content: 'Song already in playlist!',
      });
      return;
    }

    addSong(id);

    openModal({
      type: 'TEXT_ALERT',
      content: 'Song added to current playlist!',
    });
  }

  render() {
    const { title, artist, coverImage } = this.props;

    return (
      <div className="image-wrapper">
        <figure>
          <img
            src={coverImage}
            alt={title}
          />

          <button type="button" onClick={this.handlePlay}>
            <i className="far fa-play-circle fade" />
          </button>
        </figure>

        <h5
          className="image-wrapper__title"
          title="Add song to current playlist"
          role="presentation"
          onClick={this.handleAddSong}
        >
          {title}
        </h5>

        <h5 className="image-wrapper__artist">{artist}</h5>
      </div>
    );
  }
}

SongIndexItem.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  artist: string.isRequired,
  coverImage: string.isRequired,
  addSong: func.isRequired,
  userClickPlay: func.isRequired,
  forward: func.isRequired,
  openModal: func.isRequired,
  playlistSongIds: arrayOf(number).isRequired,
};

export default SongIndexItem;
