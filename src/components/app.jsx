import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './main/home_page';
import RootPage from './main/root_page_container';

const App = () => (
  <>
    <main className="Site-content Site-content--full">
      <Route path="/home" component={HomePage} />
      <Route path="/" component={RootPage} />
    </main>
  </>
);

export default App;
