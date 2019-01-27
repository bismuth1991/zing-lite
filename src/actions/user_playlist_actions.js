import * as userPlaylistApiUtil from '../util/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_USER_PLAYLIST = 'RECEIVE_USER_PLAYLIST';
export const REMOVE_USER_PLAYLIST = 'REMOVE_USER_PLAYLIST';

export const receiveUserPlaylists = userPlaylists => ({
  type: RECEIVE_USER_PLAYLISTS,
  userPlaylists,
});

export const receiveUserPlaylist = playlist => ({
  type: RECEIVE_USER_PLAYLIST,
  playlist,
});

export const removeUserPlaylist = playlistId => ({
  type: REMOVE_USER_PLAYLIST,
  playlistId,
});

export const fetchUserPlaylists = () => dispatch => (
  userPlaylistApiUtil.fetchUserPlaylists()
    .then(userPlaylists => dispatch(receiveUserPlaylists(userPlaylists)))
);

export const createPlaylist = (userId, songIds, name) => dispatch => (
  userPlaylistApiUtil.createPlaylist(userId, songIds, name)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);

export const editPlaylist = (playlistId, userId, songIds, name) => dispatch => (
  userPlaylistApiUtil.editPlaylist(playlistId, userId, songIds, name)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);

export const deleteUserPlaylist = playlistId => dispatch => (
  userPlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylistId => dispatch(removeUserPlaylist(deletedPlaylistId)))
);
