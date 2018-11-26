import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {logout} from './store'

const Navbar = isLoggedIn => (
  <div>
    <nav className="navbar">
      <div className="collapse navbar-collapse" id="navbarLinks">
        <ul className="navbar-nav mr-auto">
          {isLoggedIn ? (
            <span>
              <li className="nav-item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/transactions">Transactions</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Logout</Link>
              </li>
            </span>
          ) : (
            <li className="nav-item">
              <Link to="/">Sign Up / Logg In</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  </div>
);

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

export default connect(
  mapState,
  null
)(Navbar);
