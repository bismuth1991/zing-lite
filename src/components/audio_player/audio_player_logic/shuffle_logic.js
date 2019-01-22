import getPlayedSongIndices from './logic_util';

const shuffleLogic = (state) => {
  const { session: { audioPlayer } } = state;
  const { songIds, playedSongIndices, playingSongIndex } = audioPlayer;

  const history = [...playedSongIndices, playingSongIndex];

  const nextSongIndices = songIds.map((_, index) => index)
    .filter(index => !history.includes(index));

  let nextSongIndex;
  if (nextSongIndices.length === 0) {
    nextSongIndex = Math.floor(Math.random() * songIds.length);
  } else if (nextSongIndices.length === 1) {
    [nextSongIndex] = nextSongIndices;
  } else {
    nextSongIndex = nextSongIndices[Math.floor(Math.random() * nextSongIndices.length)];
  }

  const newPlayedSongIndices = getPlayedSongIndices(
    playedSongIndices, playingSongIndex, songIds,
  );

  return {
    ...audioPlayer,
    playingSongIndex: nextSongIndex,
    prevSongIndex: playingSongIndex,
    playedSongIndices: newPlayedSongIndices,
  };
};

export default shuffleLogic;
