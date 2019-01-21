import React from 'react';
import { string } from 'prop-types';

class SongIndexItem extends React.Component {
  componentDidMount() {}

  render() {
    const { title, artist, coverImage } = this.props;

    return (
      <div className="song-item-container">
        <figure className="song-img-container">
          <img className="song-img" src={coverImage} alt={title} />
        </figure>

        {title}
        {artist}
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
