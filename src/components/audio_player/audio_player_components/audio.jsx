import React from 'react';
import {
  bool, string, func, shape, instanceOf,
} from 'prop-types';

const Audio = (props) => {
  const {
    audioRef,
    url,
    isPlaying,
    isEndOfLoop,
    isOnLoop,
    isOnShuffle,
    forward,
    shuffle,
    getTotalAudioTime,
    updateCurrentAudioTime,
    updateVolume,
    handlePause,
    handlePlay,
    playAudio,
  } = props;

  const handleEnd = () => {
    if (isEndOfLoop && !isOnLoop) {
      return;
    }

    if (isOnShuffle) {
      shuffle();
    } else {
      forward();
    }
  };

  const handleDurationChange = () => {
    if (isPlaying) {
      playAudio();
    }
  };

  return (
    <audio
      src={url}
      ref={audioRef}
      onLoadedMetadata={getTotalAudioTime}
      onDurationChange={handleDurationChange}
      onTimeUpdate={updateCurrentAudioTime}
      onVolumeChange={updateVolume}
      onPause={handlePause}
      onPlay={handlePlay}
      onEnded={handleEnd}
    />
  );
};

Audio.propTypes = {
  audioRef: shape({ current: instanceOf(Element) }).isRequired,
  url: string.isRequired,
  isPlaying: bool.isRequired,
  isEndOfLoop: bool.isRequired,
  isOnLoop: bool.isRequired,
  isOnShuffle: bool.isRequired,
  forward: func.isRequired,
  shuffle: func.isRequired,
  getTotalAudioTime: func.isRequired,
  updateCurrentAudioTime: func.isRequired,
  updateVolume: func.isRequired,
  handlePause: func.isRequired,
  handlePlay: func.isRequired,
  playAudio: func.isRequired,
};

export default Audio;
