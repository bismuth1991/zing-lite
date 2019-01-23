import React from 'react';
import { Route } from 'react-router-dom';

import RootPage from './main/root_page_container';
import SongIndexContainer from './song_index/song_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = () => (
  <div className="Main">
    <nav className="Main-nav">
      <ul className="Grid Grid--justifyFlexStart Grid--alignItemsCenter" style={{ height: '60px' }}>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/home">Personal Playlists</a></li>
        <li><a href="#/home">Search</a></li>
        <div style={{ flex: '1' }} />
        <li><a href="#/home">Login</a></li>
        <li><a href="#/home">Signup</a></li>
      </ul>
    </nav>

    <main className="Main-body">
      <div className="Main-content">
        <Route path="/home" component={SongIndexContainer} />
      </div>

      <aside className="Main-aside">
        <Route path="/home" component={AudioPlayerContainer} />
      </aside>

      <Route path="/" component={RootPage} />
    </main>
  </div>
);

export default App;
