import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import { isLoggedOut } from '../../selectors/session_selectors';
import * as SessionActions from '../../actions/session_actions';

const activeStyle = {
  textDecoration: 'underline',
};

class NavBar extends React.Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { loggedOut } = this.props;

    return (
      <>
        <NavLink to="/home" className="Nav-Home" activeStyle={activeStyle}>
          Home
        </NavLink>

        <NavLink to="/playlist" className="Nav-Playlist" activeStyle={activeStyle}>
          Playlist
        </NavLink>
        <NavLink to="/about" className="Nav-About" activeStyle={activeStyle}>
          About
        </NavLink>

        <NavLink to="/search" className="Nav-Search" activeStyle={activeStyle}>
          Search
        </NavLink>

        <NavLink to="/profile" className="Nav-Profile" activeStyle={activeStyle}>
          Profile
        </NavLink>

        <button
          className={`Nav-Logout ${loggedOut && 'Nav-Logout-loggedOut'}`}
          type="button"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </>
    );
  }
}

NavBar.propTypes = {
  logout: func.isRequired,
  loggedOut: bool.isRequired,
};

const mapStateToProps = state => ({
  loggedOut: isLoggedOut(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
