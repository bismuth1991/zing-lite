import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home_page';
import RootPage from './root_page';

const App = () => (
  <>
    <main className="site-content site-content-full">
      <Route path="/home" component={HomePage} />
      <Route path="/" component={RootPage} />
    </main>
  </>
);

export default App;
