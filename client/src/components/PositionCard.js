import React from 'react';

const PositionCard = props => {
  const { tickerSymbol, numShares, totalStockVal, trend } = props.position;

  return (
    <div className="positionCard">
      <span>
        {tickerSymbol} - {numShares} shares
      </span>
      <span className="positionCardItem">
        <span className={trend}>${Number(totalStockVal).toFixed(2)} </span>
        <span>{trend} </span>
      </span>
    </div>
  );
};

export default PositionCard;
