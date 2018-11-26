import React, { Component } from 'react';

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
    event.preventDefault();
    // await axios.post('/api/campuses', this.state);
    this.setState({ ticker: '', quantity: 0 });
  }

  render() {
    const { userBalance } = this.props;
    console.log(this.state);
    return (
      <div>
        <h1>{userBalance}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Ticker</label>
          <input
            type="text"
            name="ticker"
            value={this.state.ticker}
            onChange={this.handleChange}
          />
          <label>Qty</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button type="submit">BUY</button>
        </form>
      </div>
    );
  }
}

export default BuyForm;
