import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../store';

const Transactions = props => {
  return (
    <div>
      <h1>Transactions</h1>
    </div>
  );
};

export default connect(
  null,
  null
)(Transactions);
