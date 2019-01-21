export const getSongInfo = (song, artists, albums) => {
  const artist = artists[song.artistId];
  const album = albums[song.albumId];

  return {
    id: song.id,
    title: song.title,
    url: song.url,
    artist: artist.name,
    avatarUrl: artist.avatarUrl,
    coverImage: album.coverImage,
  };
};

export const getSongsInfo = ({ entities }) => {
  const { songs, artists, albums } = entities;

  return Object.values(songs).map(song => (
    getSongInfo(song, artists, albums)
  ));
};
