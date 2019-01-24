import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <ul className="Grid Grid--center Grid--justifySpaceAround" style={{ height: '2em' }}>
    <NavLink to="/home" className="no-margin-bottom">Home</NavLink>
    <NavLink to="/playlist" className="no-margin-bottom">Playlist</NavLink>
    <NavLink to="/profile" className="no-margin-bottom">Profile</NavLink>
  </ul>
);

export default NavBar;
