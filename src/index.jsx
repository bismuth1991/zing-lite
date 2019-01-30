import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import 'normalize.css';
import './assets/css/index.scss';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // root.height = window.innerHeight;
  root.width = window.innerWidth;

  let store;

  if (sessionStorage.getItem('userId')) {
    const preloadedState = {
      session: {
        user: {
          userId: parseInt(sessionStorage.getItem('userId'), 10),
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
