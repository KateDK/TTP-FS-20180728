import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ isLoggedIn, handleClick }) =>
  isLoggedIn ? (
    <div>
      <nav className="navbar">
        <button className="nav-item font">
          <Link to="/portfolio">Portfolio</Link>
        </button>

        <button className="nav-item font">
          <Link to="/transactions">Transactions</Link>
        </button>

        <button onClick={handleClick} className="nav-item font">
          Logout
        </button>
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
