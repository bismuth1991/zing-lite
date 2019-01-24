import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'white',
};

const NavBar = () => (
  <ul className="Grid Grid--center Grid--justifySpaceAround" style={{ height: '2em' }}>
    <NavLink to="/home" activeStyle={activeStyle} className="no-margin-bottom">Home</NavLink>
    <NavLink to="/playlist" activeStyle={activeStyle} className="no-margin-bottom">Playlist</NavLink>
    <NavLink to="/profile" activeStyle={activeStyle} className="no-margin-bottom">Profile</NavLink>
  </ul>
);

export default NavBar;
