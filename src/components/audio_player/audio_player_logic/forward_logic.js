import getPlayedSongIndices from './logic_util';

const forwardLogic = (state) => {
  const { session: { audioPlayer } } = state;
  const { songIds, playingSongIndex, playedSongIndices } = audioPlayer;

  let newPlayingSongIndex = playingSongIndex + 1;
  if (newPlayingSongIndex > songIds.length - 1) {
    newPlayingSongIndex = 0;
  }

  const newPlayedSongIndices = getPlayedSongIndices(
    playedSongIndices, playingSongIndex, songIds,
  );

  return {
    ...audioPlayer,
    playingSongIndex: newPlayingSongIndex,
    prevSongIndex: playingSongIndex,
    playedSongIndices: newPlayedSongIndices,
  };
};

export default forwardLogic;
