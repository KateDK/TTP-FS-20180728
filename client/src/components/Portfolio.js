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
        <h1>user positions</h1>
        <ul>
          {positions.map(position => (
            <li>
              <PositionCard key={position.id} position={position} />
            </li>
          ))}
        </ul>
        <BuyForm userBalance={balance} />
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
