import React from 'react';
import BuyForm from './BuyForm';
import { connect } from 'react-redux';

const Portfolio = props => (
  <div>
    <h1>user positions</h1>
    <BuyForm userBalance={props.UserBalance} />
  </div>
);

const mapState = state => {
  return {
    UserBalance: state.user.balance,
  };
};

export default connect(
  mapState,
  null
)(Portfolio);
