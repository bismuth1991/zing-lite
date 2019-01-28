export const getSongInfo = (song, artists, albums) => {
  if (!song) return {};

  const artist = artists[song.artistId];
  const album = albums[song.albumId];

  return {
    id: song.id,
    title: song.title,
    url: song.url,
    artist: artist.name,
    artistAvatar: artist.avatarUrl,
    album: album.name,
    coverImage: album.coverImageUrl,
  };
};

export const getSongsInfo = ({ entities }) => {
  const { songs, artists, albums } = entities;

  return Object.values(songs).map(song => (
    getSongInfo(song, artists, albums)
  ));
};

export const getPlaylistSongsInfo = ({ entities, session: { audioPlayer } }) => {
  const { songs, artists, albums } = entities;

  return audioPlayer.songIds.map(
    songId => getSongInfo(songs[songId], artists, albums),
  );
};

export const getPlayingSongId = ({ session: { audioPlayer } }) => {
  const { songIds, playingSongIndex } = audioPlayer;
  return songIds[playingSongIndex];
};
