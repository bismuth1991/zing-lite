import React from 'react';
import { string } from 'prop-types';

const SpinningDisc = (props) => {
  const { album, coverImage } = props;

  return (
    <figure className="album-cover">
      <img src={coverImage} alt={album} />
    </figure>
  );
};

SpinningDisc.propTypes = {
  album: string.isRequired,
  coverImage: string.isRequired,
};

export default SpinningDisc;
