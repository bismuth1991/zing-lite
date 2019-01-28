import axios from 'axios';

export const currentDate = () => new Date().toLocaleString();

export const fetchUserPlaylists = userId => (
  axios.request({
    url: `https://zing-lite-rails-api.herokuapp.com/api/playlists/?user_id=${userId}`,
    method: 'get',
    headers: { 'X-CSRF-Token': sessionStorage.getItem('CSRF-TOKEN') },
    withCredentials: true,
  })
);

export const createPlaylist = playlistData => (
  axios.request({
    url: 'https://zing-lite-rails-api.herokuapp.com/api/playlists',
    method: 'post',
    headers: { 'X-CSRF-Token': sessionStorage.getItem('CSRF-TOKEN') },
    data: playlistData,
    withCredentials: true,
  })
);

export const editPlaylist = (playlistId, playlistData) => (
  axios.request({
    url: `https://zing-lite-rails-api.herokuapp.com/api/playlists/${playlistId}`,
    method: 'patch',
    headers: { 'X-CSRF-Token': sessionStorage.getItem('CSRF-TOKEN') },
    data: playlistData,
    withCredentials: true,
  })
);

export const deletePlaylist = playlistId => (
  axios.request({
    url: `https://zing-lite-rails-api.herokuapp.com/api/playlists/${playlistId}`,
    method: 'delete',
    headers: { 'X-CSRF-Token': sessionStorage.getItem('CSRF-TOKEN') },
    withCredentials: true,
  })
);
