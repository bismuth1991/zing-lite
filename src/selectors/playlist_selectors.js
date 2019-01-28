export const getPlaylistId = ({ session }) => session.audioPlayer.currentPlaylist;

export const getPlaylistName = ({ entities }, playlistId) => {
  let playlistName;
  try {
    playlistName = entities.userPlaylists[playlistId].name;
  } catch (err) {
    playlistName = undefined;
  }

  return playlistName;
};
