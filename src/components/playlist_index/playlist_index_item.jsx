import React from 'react';
import { string, bool } from 'prop-types';
import SoundWave from './soundwave';

const PlaylistIndexItem = (props) => {
  const { title, artist, album, isPlaying } = props;

  return (
    <>
      <div>
        {isPlaying ? <SoundWave /> : null}
        <span><h4>{title}</h4></span>
      </div>

      <h5>{`${artist} - ${album}`}</h5>
    </>
  );
};

PlaylistIndexItem.propTypes = {
  title: string.isRequired,
  artist: string.isRequired,
  album: string.isRequired,
  isPlaying: bool.isRequired,
};

export default PlaylistIndexItem;
