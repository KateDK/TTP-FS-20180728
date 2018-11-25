import React from 'react';
import BuyForm from './BuyForm';
import { connect } from 'react-redux';
import { getPositions } from '../store';

const Portfolio = props => {
  const { positions, balance } = props;
  console.log('POSITIONS: ', positions);
  return (
    <div>
      <h1>user positions</h1>
      <ul>
        {positions.map(position => (
          <li>{position.tickerSymbol}</li>
        ))}
      </ul>
      <BuyForm userBalance={balance} />
    </div>
  );
};

const mapState = state => {
  return {
    balance: state.user.balance,
    positions: state.positions,
  };
};

const mapDispatch = dispatch => {
  return {
    getPositions: () => dispatch(getPositions()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Portfolio);
