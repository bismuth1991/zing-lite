import * as userPlaylistApiUtil from '../utils/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_USER_PLAYLIST = 'RECEIVE_USER_PLAYLIST';
export const REMOVE_USER_PLAYLIST = 'REMOVE_USER_PLAYLIST';

export const receiveUserPlaylists = userPlaylists => ({
  type: RECEIVE_USER_PLAYLISTS,
  userPlaylists,
});

export const receiveUserPlaylist = userPlaylist => ({
  type: RECEIVE_USER_PLAYLIST,
  userPlaylist,
});

export const removeUserPlaylist = playlistId => ({
  type: REMOVE_USER_PLAYLIST,
  playlistId,
});

export const fetchUserPlaylists = userId => dispatch => (
  userPlaylistApiUtil.fetchUserPlaylists(userId)
    .then(userPlaylists => dispatch(receiveUserPlaylists(userPlaylists)))
);

export const createPlaylist = playlistData => dispatch => (
  userPlaylistApiUtil.createPlaylist(playlistData)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);

export const editPlaylist = (playlistId, playlistData) => dispatch => (
  userPlaylistApiUtil.editPlaylist(playlistId, playlistData)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);

export const deleteUserPlaylist = playlistId => dispatch => (
  userPlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylistId => dispatch(removeUserPlaylist(deletedPlaylistId)))
);
