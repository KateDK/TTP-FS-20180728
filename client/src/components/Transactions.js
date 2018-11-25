import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../store';
import TransactionCard from './TransactionCard';

class Transactions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const transactions = this.props.transactions;
    return (
      <div>
        <h1>User Transaction History</h1>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <TransactionCard transaction={transaction} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    transactions: state.transactions,
  };
};
export default connect(
  mapState,
  null
)(Transactions);
