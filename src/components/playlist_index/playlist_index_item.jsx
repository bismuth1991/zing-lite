import React from 'react';
import { string } from 'prop-types';

const PlaylistIndexItem = (props) => {
  const { title, artist, album } = props;

  return (
      <>
        <h4>{title}</h4>
        <h5>{`${artist} - ${album}`}</h5>
      </>
  );
};

PlaylistIndexItem.propTypes = {
  title: string.isRequired,
  artist: string.isRequired,
  album: string.isRequired,
};

export default PlaylistIndexItem;
