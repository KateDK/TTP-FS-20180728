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
    if (!transactions.length) {
      return <h3>No transactions yet</h3>;
    }
    return (
      <div>
        <h3>Transaction History</h3>
        <ul className="transactionList">
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
