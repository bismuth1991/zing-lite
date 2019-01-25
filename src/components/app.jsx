import React from 'react';
import { Route } from 'react-router-dom';

import RootPage from './main/root_page_container';
import NavBar from './nav/nav_bar';
import SongIndexContainer from './song_index/song_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import PlaylistIndexContainer from './playlist_index/playlist_index_container';
import SearchBar from './nav/search_bar';

const App = () => (
  <div className="Site">
    <NavBar />
    <SearchBar />

    <div className="Main">
      {/* <Route path="/home" component={SongIndexContainer} />
      <Route path="/playlist" component={PlaylistIndexContainer} /> */}
    </div>

    <aside className="Aside">
      <Route path="/" component={RootPage} />
      <Route path="/" component={AudioPlayerContainer} />
    </aside>


    {/* <main className="Main-body">
      <div className="Main-content" id="song-index">
        <Route path="/home" component={SongIndexContainer} />
        <Route path="/playlist" component={PlaylistIndexContainer} />
      </div>

      <aside className="Main-aside">
        <Route path="/" component={AudioPlayerContainer} /
      </aside>

      <Route path="/" component={RootPage} />
    </main> */}
  </div>
);

export default App;
