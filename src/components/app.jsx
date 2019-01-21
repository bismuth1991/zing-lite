import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './main/home_page';

const App = () => (
  <>
    <main className="Site-content Site-content--full">
      <Route path="/home" component={HomePage} />
    </main>
  </>
);

export default App;
