import { getSongInfo } from './song_selector';

export const getCurrentSongInfo = ({ entities, session }) => {
  const { songs, artists, albums } = entities;
  const { audioPlayer: { songIds, playingSongIndex } } = session;

  const playingSongId = songIds[playingSongIndex];
  const currentSong = songs[playingSongId];

  return getSongInfo(currentSong, artists, albums);
};

export const isEndOfLoop = ({ session: { audioPlayer } }) => {
  const { songIds, playedSongIndices } = audioPlayer;

  return songIds.length - 1 === playedSongIndices.length;
};
