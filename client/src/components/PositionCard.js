import React from 'react';

const PositionCard = props => {
  const { tickerSymbol, numShares, totalStockVal, trend } = props.position;
  return (
    <div>
      <p>{tickerSymbol}</p>
      <p>{numShares}</p>
      <p>{totalStockVal}</p>
      <p>{trend}</p>
    </div>
  );
};

export default PositionCard;
