import React from 'react';
import { string, bool, number } from 'prop-types';
import SoundWave from './soundwave';

const PlaylistIndexItem = (props) => {
  const {
    id,
    title,
    artist,
    album,
    isPlaying,
    handleRemoveSong,
  } = props;

  return (
    <>
      <div className="playlist-item__inner-wrapper">
        {isPlaying ? <SoundWave /> : null}
        <span>
          <h4 className="playlist-item__title">{title}</h4>
        </span>

        <button
          className="playlist-item__X"
          type="button"
          onClick={handleRemoveSong(id)}
        >
          <h6>remove</h6>
        </button>
      </div>

      <h5>{`${artist} - ${album}`}</h5>
    </>
  );
};

PlaylistIndexItem.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  artist: string.isRequired,
  album: string.isRequired,
  isPlaying: bool.isRequired,
};

export default PlaylistIndexItem;
