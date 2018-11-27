import React from 'react';

const TransactionCard = props => {
  const { action, tickerSymbol, numShares, price } = props.transaction;
  return (
    <div className="transactionCard font">
      <span className="transactionCardItem first">
        {action} ({tickerSymbol})
      </span>
      <span className="transactionCardItem"> {numShares} shares </span>
      <span className="transactionCardItem">@ {Number(price).toFixed(2)}</span>
    </div>
  );
};

export default TransactionCard;
