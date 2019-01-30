import React from 'react';
import { number, func } from 'prop-types';

const VolumeSlider = (props) => {
  const {
    volume,
    preMuteVolume,
    handleMute,
    handleUnmute,
  } = props;

  let volumeButton;
  if (volume === 0) {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleUnmute(preMuteVolume)}>
        <i className="fas fa-volume-mute" />
      </button>
    );
  } else {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleMute}>
        <i className="fas fa-volume-up active" />
      </button>
    );
  }

  return (
    <>
      {volumeButton}
    </>
  );
};

VolumeSlider.propTypes = {
  volume: number.isRequired,
  preMuteVolume: number.isRequired,
  handleMute: func.isRequired,
  handleUnmute: func.isRequired,
  handleVolume: func.isRequired,
};

export default VolumeSlider;
