import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

import RootPage from './main/root_page_container';
import NavBar from './nav/nav_bar';
import SongIndexContainer from './song_index/song_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import PlaylistIndexContainer from './playlist_index/playlist_index_container';
import SearchBar from './nav/search_bar';
import LoginFormContainer from './main/session_form/login_form_container';
import SignupFormContainer from './main/session_form/signup_form_container';

const App = () => (
  <div className="Site">
    <NavBar />
    <SearchBar />

    <div className="Main">
      {/* <Route path="/home" component={SongIndexContainer} />
      <Route path="/playlist" component={PlaylistIndexContainer} /> */}

      <ProtectedRoute exact path="/profile" component={SignupFormContainer} />
      <AuthRoute path="/profile/login" component={LoginFormContainer} />
      <AuthRoute path="/profile/signup" component={SignupFormContainer} />
    </div>

    <aside className="Aside">
      <Route path="/" component={RootPage} />
      <Route path="/" component={AudioPlayerContainer} />
    </aside>
  </div>
);

export default App;
