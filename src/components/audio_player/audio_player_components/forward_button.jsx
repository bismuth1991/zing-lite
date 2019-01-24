import React from 'react';
import { func } from 'prop-types';

const ForwardButton = (props) => {
  const { forward, playAudio } = props;

  const playNextSong = () => {
    forward();
    window.setTimeout(() => { playAudio(); }, 0);
  };

  return (
    <button type="button" onClick={playNextSong}>
      <i className="fas fa-step-forward" />
    </button>
  );
};

ForwardButton.propTypes = {
  forward: func.isRequired,
  playAudio: func.isRequired,
};

export default ForwardButton;
