import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import configureStore from './store/store';
import Root from './components/root';

import './assets/css/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    root,
  );

  axios.defaults.baseURL = 'https://zing-lite-rails-api.herokuapp.com';
  axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
  axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
  axios.defaults.withCredentials = true;
});
