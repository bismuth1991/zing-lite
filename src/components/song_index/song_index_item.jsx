import React from 'react';
import { string } from 'prop-types';

class SongIndexItem extends React.Component {
  componentDidMount() {}

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

          <button type="button"><i className="far fa-play-circle fade" /></button>
        </figure>

        <p className="Feature-description">{title}</p>
        <p className="Feature-description">{artist}</p>
      </div>
    );
  }
}

SongIndexItem.propTypes = {
  title: string.isRequired,
  artist: string.isRequired,
  coverImage: string.isRequired,
};

export default SongIndexItem;
