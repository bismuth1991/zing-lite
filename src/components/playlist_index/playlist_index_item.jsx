import React from 'react';

const PlaylistIndexItem = (props) => {
  const { title, artist, album } = props;

  return (
      <>
        <h3>{title}</h3>
        <h4>{`${artist} - ${album}`}</h4>
      </>
  );
};

export default PlaylistIndexItem;
