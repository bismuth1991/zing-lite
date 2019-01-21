import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { instanceOf } from 'prop-types';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </HashRouter>
  </Provider>
);

export default Root;

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};
