import getPlayedSongIndices from './logic_util';

const backwardLogic = (state) => {
  const { session: { audioPlayer } } = state;
  const {
    songIds, playingSongIndex, playedSongIndices, prevSongIndex,
  } = audioPlayer;

  let newPrevSongIndex = prevSongIndex - 1;
  if (newPrevSongIndex < 0) {
    newPrevSongIndex = songIds.length - 1;
  }

  const newPlayedSongIndices = getPlayedSongIndices(
    playedSongIndices, playingSongIndex, songIds,
  );

  return {
    ...audioPlayer,
    playingSongIndex: prevSongIndex,
    prevSongIndex: newPrevSongIndex,
    playedSongIndices: newPlayedSongIndices,
  };
};

export default backwardLogic;
