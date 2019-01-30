import * as userPlaylistApiUtil from '../utils/user_playlist_utils';
import { openModal } from './modal_actions';

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
    .catch(err => console.warn(err))
);

export const createPlaylist = playlistData => dispatch => (
  userPlaylistApiUtil.createPlaylist(playlistData)
    .then(payload => Promise.all([
      dispatch(receiveUserPlaylist(payload)),
      dispatch(openModal({
        type: 'TEXT_ALERT',
        content: 'New playlist created!',
      })),
    ]))
    .catch(err => console.warn(err))
);

export const editPlaylist = (playlistId, playlistData) => dispatch => (
  userPlaylistApiUtil.editPlaylist(playlistId, playlistData)
    .then(payload => Promise.all([
      dispatch(receiveUserPlaylist(payload)),
      dispatch(openModal({
        type: 'TEXT_ALERT',
        content: 'Playlist saved!',
      })),
    ]))
    .catch(err => console.warn(err))
);

export const deleteUserPlaylist = playlistId => dispatch => (
  userPlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylistId => dispatch(removeUserPlaylist(deletedPlaylistId)))
    .catch(err => console.warn(err))
);
