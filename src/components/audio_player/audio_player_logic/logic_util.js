const getPlayedSongIndices = (playedSongIndices, playingSongIndex, songIds) => {
  let newPlayedSongIndices = [...playedSongIndices];

  if (!playedSongIndices.includes(playingSongIndex)) {
    newPlayedSongIndices = [...playedSongIndices, playingSongIndex];
  }
  if (newPlayedSongIndices.length === songIds.length) {
    newPlayedSongIndices = [];
  }

  return newPlayedSongIndices;
};

export default getPlayedSongIndices;
