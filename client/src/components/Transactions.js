import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../store';
import TransactionCard from './TransactionCard';

class Transactions extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchTransactions();
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

const mapDispatch = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
  };
};
export default connect(
  mapState,
  mapDispatch
)(Transactions);
