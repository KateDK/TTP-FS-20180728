import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {logout} from './store'

const Navbar = () => (
  <div>
    <nav className="navbar">
      <div className="collapse navbar-collapse" id="navbarLinks">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">Sign Up / Logg In</li>
          <li className="nav-item">Logout</li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
