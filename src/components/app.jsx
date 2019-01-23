import React from 'react';
import { Route } from 'react-router-dom';

import RootPage from './main/root_page_container';
import SongIndexContainer from './song_index/song_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = () => (
  <>
    <nav className="HolyGrail-nav">Navigation</nav>

    <main className="HolyGrail-body">
      <article className="HolyGrail-content">
        <Route path="/home" component={SongIndexContainer} />
      </article>

      <aside className="HolyGrail-aside">
        <Route path="/home" component={AudioPlayerContainer} />
      </aside>

      <Route path="/" component={RootPage} />
    </main>
  </>
);

export default App;
