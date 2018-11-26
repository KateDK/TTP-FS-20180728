import React from 'react';

const PositionCard = props => {
  const { tickerSymbol, numShares, totalStockVal, trend } = props.position;

  return (
    <div className="positionCard">
      <span>{tickerSymbol} - </span>
      <span>{numShares} shares </span>
      <span className={trend}>{Number(totalStockVal).toFixed(2)} </span>
      <span>{trend} </span>
    </div>
  );
};

export default PositionCard;
