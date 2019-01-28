import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { instanceOf } from 'prop-types';

import App from './app';
import ErrorHandler from './error_handler';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <ErrorHandler>
        <App />
      </ErrorHandler>
    </HashRouter>
  </Provider>
);

export default Root;

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};
