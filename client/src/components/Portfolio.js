import React, { Component } from 'react';
import BuyForm from './BuyForm';
import { connect } from 'react-redux';
import { fetchPositions } from '../store';
import PositionCard from './PositionCard';

class Portfolio extends Component {
  componentDidMount() {
    this.props.fetchPositions();
  }
  render() {
    const { positions, balance } = this.props;

    return (
      <div className="portfolio_wrapper">
        <h1>Your Portfolio</h1>
        <div className="portfolio">
          <div>
            <h3>Total Portfolio Value: {}</h3>
            <ul className="positionsList">
              {positions.map(position => (
                <li key={position.id}>
                  <PositionCard position={position} />
                </li>
              ))}
            </ul>
          </div>
          <BuyForm userBalance={balance} />
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    balance: state.user.balance,
    positions: state.positions,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchPositions: () => dispatch(fetchPositions()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Portfolio);
