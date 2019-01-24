import React from 'react';
import { number, string, func } from 'prop-types';

class SongIndexItem extends React.Component {
  constructor() {
    super();

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    const { id, userClickPlay, forward } = this.props;
    userClickPlay(id);
    forward();
  }

  render() {
    const { title, artist, coverImage } = this.props;

    return (
      <div className="Feature">
        <figure>
          <img
            className="Feature-image"
            src={coverImage}
            alt={title}
          />

          <button type="button" onClick={this.handlePlay}>
            <i className="far fa-play-circle fade" />
          </button>
        </figure>

        <p className="Feature-description">{title}</p>
        <p className="Feature-description">{artist}</p>
      </div>
    );
  }
}

SongIndexItem.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  artist: string.isRequired,
  coverImage: string.isRequired,
  userClickPlay: func.isRequired,
  forward: func.isRequired,
};

export default SongIndexItem;
