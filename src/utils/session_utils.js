import axios from 'axios';

export const setCSRFToken = () => {
  axios.defaults.baseUrl = 'https://zing-lite-rails-api.herokuapp.com';
  axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
  axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
  axios.defaults.withCredentials = true;
};

export const signup = userData => axios.post(
  '/api/users',
  userData,
);

export const login = userData => axios.post(
  '/api/session',
  userData,
);
