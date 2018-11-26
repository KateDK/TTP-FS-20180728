import React, { Component } from 'react';
import BuyForm from './BuyForm';
import { connect } from 'react-redux';
import { fetchPositions } from '../store';
import PositionCard from './PositionCard';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPositions();
  }
  render() {
    const { positions, balance } = this.props;

    return (
      <div>
        <h1>Your Portfolio</h1>
        <span className="portfolio">
          <span className="positionsList">
            <h3>Total Portfolio Value: </h3>
            <ul>
              {positions.map(position => (
                <li key={position.id}>
                  <PositionCard position={position} />
                </li>
              ))}
            </ul>
          </span>
          <BuyForm userBalance={balance} />
        </span>
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
