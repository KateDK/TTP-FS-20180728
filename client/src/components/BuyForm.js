import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBuyStocks } from '../store';

class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: '',
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const ticker = this.state.ticker;
    const quantity = this.state.quantity;
    event.preventDefault();
    this.props.createBuyStocks(ticker, quantity);
    this.setState({ ticker: '', quantity: 0 });
  }

  render() {
    const { userBalance } = this.props;
    console.log(this.state);
    return (
      <div className="buyForm">
        <h1>Your Balance: ${Number(userBalance).toFixed(2)}</h1>
        <form onSubmit={this.handleSubmit} className="formBody">
          <div className="formItem">
            <label>Ticker</label>
            <input
              type="text"
              name="ticker"
              // placeholder="Ticker"
              value={this.state.ticker}
              onChange={this.handleChange}
            />
          </div>
          <div className="formItem">
            <label>Qty</label>
            <input
              type="number"
              name="quantity"
              placeholder=""
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <button className="formItem" type="submit">
            BUY
          </button>
        </form>
      </div>
    );
  }
}

//export default BuyForm;

const mapDispatch = dispatch => {
  return {
    createBuyStocks: (ticker, quantity) =>
      dispatch(createBuyStocks(ticker, quantity)),
  };
};
export default connect(
  null,
  mapDispatch
)(BuyForm);
