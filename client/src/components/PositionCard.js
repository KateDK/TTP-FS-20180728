import React from 'react';

const PositionCard = props => {
  const { tickerSymbol, numShares, totalStockVal, trend } = props.position;
  return (
    <div>
      <span>{tickerSymbol} - </span>
      <span>{numShares} shares </span>
      <span>{Number(totalStockVal).toFixed(2)} </span>
      <span>{trend} </span>
    </div>
  );
};

export default PositionCard;
