export function handlePlay() {
  this.setState({ isPlaying: true });
}

export function handlePause() {
  this.setState({ isPlaying: false });
}

export function playAudio() {
  const { hasMount } = this.state;

  if (!hasMount) {
    this.setState({ hasMount: true });
  } else {
    this.audioRef.current.play()
      .catch(err => console.warn(err));
  }
}

export function pauseAudio() {
  this.audioRef.current.pause();
}
