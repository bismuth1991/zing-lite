import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { func, bool } from 'prop-types';
import * as SessionActions from '../../actions/session_actions';


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

    const activeStyle = {
      textDecoration: 'underline',
    };

    return (
      <>
        <NavLink to="/home" className="Nav-Home" activeStyle={activeStyle}>
          Home
        </NavLink>

        <NavLink to="/playlist" className="Nav-Playlist" activeStyle={activeStyle}>
          Playlist
        </NavLink>

        <NavLink to="/profile" className="Nav-Profile" activeStyle={activeStyle}>
          Profile
        </NavLink>

        <NavLink to="/about" className="Nav-About" activeStyle={activeStyle}>
          About
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

const mapStateToProps = ({ session }) => ({
  loggedOut: !session.user.userId,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
