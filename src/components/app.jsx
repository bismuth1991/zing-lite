import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { bool } from 'prop-types';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

import RootPage from './root_page/root_page_container';
import NavBar from './nav/nav_bar';
import SearchIndexContainer from './search_index/search_index_container';
import SongIndexContainer from './song_index/song_index_container';
import UserPlaylistContainer from './user_playlist/user_playlist_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import PlaylistIndexContainer from './playlist_index/playlist_index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import About from './about/about';
import ModalContainer from './modal/modal_container';

const App = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="Site__Container">
      <p className="Site__Title">
        <span>Zing Lite</span>
      </p>

      <div className={`Site ${isLoggedIn && 'Site-LoggedIn'}`}>
        <NavBar />

        <ModalContainer />

        <div className="Main">
          <Switch>
            <ProtectedRoute path="/playlist/:playlistId" component={PlaylistIndexContainer} />
            <Route path="/playlist" component={PlaylistIndexContainer} />

            <Route path="/home" component={SongIndexContainer} />
            <Route path="/search" component={SearchIndexContainer} />
            <Route path="/about" component={About} />

            <AuthRoute path="/profile/login" component={LoginFormContainer} />
            <AuthRoute path="/profile/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/profile" component={UserPlaylistContainer} />

            <Redirect to="/home" />
          </Switch>
        </div>

        <aside className="Aside">
          <Route path="/" component={RootPage} />
          <Route path="/" component={AudioPlayerContainer} />
        </aside>
      </div>

      <p className="Site__Author">
        <span>Designed by: Bao Tran </span>
        <br />
        <a href="https://github.com/bismuth1991"><i className="fab fa-github" /></a>
        <span>{' '}</span>
        <a href="https://www.linkedin.com/in/baotran-91/"><i className="fab fa-linkedin" /></a>
      </p>
    </div>
  );
};

App.propTypes = {
  isLoggedIn: bool.isRequired,
};

const mapStateToProps = ({ session }) => ({ isLoggedIn: Boolean(session.user.userId) });

export default withRouter(connect(mapStateToProps, null)(App));
