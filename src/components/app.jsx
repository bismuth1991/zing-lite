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
// import MobileResize from './mobile_resize/mobile_resize';

class App extends React.Component {
  constructor() {
    super();

    this.state = ({ currentPhone: 'Galaxy-S5' });

    this.handleSwitchPhone = this.handleSwitchPhone.bind(this);
  }

  handleSwitchPhone(e) {
    this.setState({ currentPhone: e.target.innerText });
  }

  render() {
    const { isLoggedIn } = this.props;
    const { currentPhone } = this.state;

    return (
      <div className={`Site ${isLoggedIn && 'Site-LoggedIn '} Site--${currentPhone}`}>
        {/* <MobileResize
          handleSwitchPhone={this.handleSwitchPhone}
          currentPhone={currentPhone}
        /> */}

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
    );
  }
}

// const App = (props) => {
//   const { isLoggedIn } = props;

//   return (
//     <div className={`Site ${isLoggedIn && 'Site-LoggedIn '} Site--galaxy-S5`}>
//       <NavBar />

//       <ModalContainer />

//       <div className="Main">
//         <Switch>
//           <ProtectedRoute path="/playlist/:playlistId" component={PlaylistIndexContainer} />
//           <Route path="/playlist" component={PlaylistIndexContainer} />

//           <Route path="/home" component={SongIndexContainer} />
//           <Route path="/search" component={SearchIndexContainer} />
//           <Route path="/about" component={About} />

//           <AuthRoute path="/profile/login" component={LoginFormContainer} />
//           <AuthRoute path="/profile/signup" component={SignupFormContainer} />
//           <ProtectedRoute path="/profile" component={UserPlaylistContainer} />

//           <Redirect to="/home" />
//         </Switch>
//       </div>

//       <aside className="Aside">
//         <Route path="/" component={RootPage} />
//         <Route path="/" component={AudioPlayerContainer} />
//       </aside>
//     </div>
//   );
// };

App.propTypes = {
  isLoggedIn: bool.isRequired,
};

const mapStateToProps = ({ session }) => ({ isLoggedIn: Boolean(session.user.userId) });

export default withRouter(connect(mapStateToProps, null)(App));
