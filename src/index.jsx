import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import 'normalize.css';
import './assets/css/index.scss';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;

  if (sessionStorage.getItem('userId')) {
    const preloadedState = {
      session: {
        user: {
          userId: sessionStorage.getItem('userId'),
          username: sessionStorage.getItem('username'),
        },
      },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
