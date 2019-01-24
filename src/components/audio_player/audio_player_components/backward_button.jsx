import React from 'react';
import { func } from 'prop-types';

const BackwardButton = (props) => {
  const { backward, playAudio } = props;

  const playPrevSong = () => {
    backward();
    window.setTimeout(() => { playAudio(); }, 0);
  };

  return (
    <button type="button" onClick={playPrevSong}>
      <i className="fas fa-step-backward" />
    </button>
  );
};

BackwardButton.propTypes = {
  backward: func.isRequired,
  playAudio: func.isRequired,
};

export default BackwardButton;
