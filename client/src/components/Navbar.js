import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ isLoggedIn, handleClick }) =>
  isLoggedIn ? (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <span className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/transactions">Transactions</Link>
            </li>

            <a href="#" onClick={handleClick} className="nav-item nav-link">
              Logout
            </a>
          </span>
        </ul>
      </nav>
    </div>
  ) : null;

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick: () => dispatch(logout()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);
