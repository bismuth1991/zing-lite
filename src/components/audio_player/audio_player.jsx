import React from 'react';
import { string, func, bool } from 'prop-types';

import eventHandlers from './event_handlers/event_handlers';

import Audio from './audio_player_components/audio';
import SpinningDisc from './audio_player_components/spinning_disc';
import Marquee from './audio_player_components/marquee';
import PlayPauseButton from './audio_player_components/play_pause_button';
import ForwardButton from './audio_player_components/forward_button';
import ShuffleButton from './audio_player_components/shuffle_button';
import BackwardButton from './audio_player_components/backward_button';
import SeekSlider from './audio_player_components/seek_slider';
import VolumeSlider from './audio_player_components/volume_slider';
import LoopButton from './audio_player_components/loop_button';

class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      isOnLoop: false,
      isOnShuffle: false,
      seekValue: 0,
      totalAudioTime: '0:00',
      currentAudioTime: '0:00',
      volume: 50,
      preMuteVolume: 50,
    };

    this.audioRef = React.createRef();

    this.getTotalAudioTime = eventHandlers.getTotalAudioTime.bind(this);
    this.updateCurrentAudioTime = eventHandlers.updateCurrentAudioTime.bind(this);
    this.handleSeek = eventHandlers.handleSeek.bind(this);
    this.handlePlay = eventHandlers.handlePlay.bind(this);
    this.handlePause = eventHandlers.handlePause.bind(this);
    this.playAudio = eventHandlers.playAudio.bind(this);
    this.pauseAudio = eventHandlers.pauseAudio.bind(this);
    this.handleVolume = eventHandlers.handleVolume.bind(this);
    this.handleMute = eventHandlers.handleMute.bind(this);
    this.handleUnmute = eventHandlers.handleUnmute.bind(this);
    this.updateVolume = eventHandlers.updateVolume.bind(this);
    this.toggleShuffle = eventHandlers.toggleShuffle.bind(this);
    this.toggleLoop = eventHandlers.toggleLoop.bind(this);
  }

  render() {
    const {
      title,
      url,
      artist,
      artistAvatar,
      album,
      coverImage,
      isEndOfLoop,
      forward,
      backward,
      shuffle,
    } = this.props;

    const {
      isPlaying,
      isOnLoop,
      isOnShuffle,
      volume,
      preMuteVolume,
      seekValue,
      currentAudioTime,
      totalAudioTime,
    } = this.state;

    return (
      <>
        <Audio
          audioRef={this.audioRef}
          url={url}
          forward={forward}
          shuffle={shuffle}
          isEndOfLoop={isEndOfLoop}
          isOnLoop={isOnLoop}
          isOnShuffle={isOnShuffle}
          getTotalAudioTime={this.getTotalAudioTime}
          updateCurrentAudioTime={this.updateCurrentAudioTime}
          updateVolume={this.updateVolume}
          handlePause={this.handlePause}
          handlePlay={this.handlePlay}
          playAudio={this.playAudio}
        />


        <div className="AudioPlayerContainer">
          <SpinningDisc album={album} coverImage={coverImage} />

          <Marquee title={title} artist={artist} artistAvatar={artistAvatar} />

          <div className="Controls1">
            <BackwardButton
              backward={backward}
              playAudio={this.playAudio}
            />
            <PlayPauseButton
              isPlaying={isPlaying}
              playAudio={this.playAudio}
              pauseAudio={this.pauseAudio}
            />
            <ForwardButton
              forward={forward}
              playAudio={this.playAudio}
            />
          </div>

          <div className="Controls2">
            <ShuffleButton
              isOnShuffle={isOnShuffle}
              toggleShuffle={this.toggleShuffle}
            />
            <LoopButton
              isEndOfLoop={isEndOfLoop}
              isOnLoop={isOnLoop}
              toggleLoop={this.toggleLoop}
            />
            <VolumeSlider
              volume={volume}
              preMuteVolume={preMuteVolume}
              handleMute={this.handleMute}
              handleUnmute={this.handleUnmute}
              handleVolume={this.handleVolume}
            />
          </div>

          <SeekSlider
            seekValue={seekValue}
            currentAudioTime={currentAudioTime}
            totalAudioTime={totalAudioTime}
            handleSeek={this.handleSeek}
          />
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  artist: string.isRequired,
  artistAvatar: string.isRequired,
  album: string.isRequired,
  coverImage: string.isRequired,
  isEndOfLoop: bool.isRequired,
  forward: func.isRequired,
  backward: func.isRequired,
  shuffle: func.isRequired,
};

export default AudioPlayer;
