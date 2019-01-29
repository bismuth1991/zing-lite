import React from 'react';
import { string, func, arrayOf, number } from 'prop-types';

class UserPlaylistItem extends React.Component {
  constructor() {
    super();

    this.state = { loaded: false };
    this.loaded = this.loaded.bind(this);
  }

  loaded() {
    this.setState({ loaded: true });
  }

  render() {
    const { name, coverImageUrl, handlePlay, songIds, id } = this.props;
    const { loaded } = this.state;

    return (
      <div className="image-wrapper">
        <figure>
          <img
            className={`profile__playlist__image${loaded ? '--loaded' : ''}`}
            src={coverImageUrl}
            onLoad={this.loaded}
            alt={name}
          />

          <button type="button" onClick={handlePlay(songIds, id)}>
            <i className="far fa-play-circle" />
          </button>
        </figure>

        <h5 className="profile__playlist__name">{name}</h5>
      </div>
    );
  }
}

UserPlaylistItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  coverImageUrl: string.isRequired,
  handlePlay: func.isRequired,
  songIds: arrayOf(number).isRequired,
};

export default UserPlaylistItem;
