import axios from 'axios';

export const signup = userData => axios.request({
  url: 'https://zing-lite-rails-api.herokuapp.com/api/users',
  method: 'post',
  headers: { 'X-CSRF-Token': localStorage.getItem('CSRF-TOKEN') },
  data: userData,
  withCredentials: true,
});

export const login = userData => axios.request({
  url: 'https://zing-lite-rails-api.herokuapp.com/api/session',
  method: 'post',
  headers: { 'X-CSRF-Token': localStorage.getItem('CSRF-TOKEN') },
  data: userData,
  withCredentials: true,
});
