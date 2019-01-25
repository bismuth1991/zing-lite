import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  textDecoration: 'underline',
};

const NavBar = () => (
  <>
    <NavLink
      to="/home"
      className="Nav-Home"
      activeStyle={activeStyle}
    >
      Home
    </NavLink>

    <NavLink
      to="/playlist"
      className="Nav-Playlist"
      activeStyle={activeStyle}
    >
      Playlist
    </NavLink>

    <NavLink
      to="/profile"
      className="Nav-Profile"
      activeStyle={activeStyle}
    >
      Profile
    </NavLink>

    <NavLink
      to="/about"
      className="Nav-About"
      activeStyle={activeStyle}
    >
      About
    </NavLink>
  </>
);

export default NavBar;
