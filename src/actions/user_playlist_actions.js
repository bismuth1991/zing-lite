import * as userPlaylistApiUtil from '../utils/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_USER_PLAYLIST = 'RECEIVE_USER_PLAYLIST';
export const REMOVE_USER_PLAYLIST = 'REMOVE_USER_PLAYLIST';

export const receiveUserPlaylists = payload => ({
  type: RECEIVE_USER_PLAYLISTS,
  payload,
});

export const receiveUserPlaylist = payload => ({
  type: RECEIVE_USER_PLAYLIST,
  payload,
});

export const removeUserPlaylist = playlistId => ({
  type: REMOVE_USER_PLAYLIST,
  playlistId,
});

export const fetchUserPlaylists = userId => dispatch => (
  userPlaylistApiUtil.fetchUserPlaylists(userId)
    .then(payload => dispatch(receiveUserPlaylists(payload)))
);

export const createPlaylist = playlistData => dispatch => (
  userPlaylistApiUtil.createPlaylist(playlistData)
    .then(payload => dispatch(receiveUserPlaylist(payload)))
);

export const editPlaylist = (playlistId, playlistData) => dispatch => (
  userPlaylistApiUtil.editPlaylist(playlistId, playlistData)
    .then(payload => dispatch(receiveUserPlaylist(payload)))
);

export const deleteUserPlaylist = playlistId => dispatch => (
  userPlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylistId => dispatch(removeUserPlaylist(deletedPlaylistId)))
);
