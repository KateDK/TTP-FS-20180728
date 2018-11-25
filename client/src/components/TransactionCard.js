import React from 'react';

/**
 *
 * id: 2,
    tickerSymbol: 'FB',
    numShares: 5,
    action: 'buy',
    price: 172,
    createdAt: '2018-11-25T21:35:10.019Z',
    updatedAt: '2018-11-25T21:35:10.019Z',
    userId: 1,
 */

const TransactionCard = props => {
  const { action, tickerSymbol, numShares, price } = props.transaction;
  return (
    <div>
      <span>{action} </span>
      <span>({tickerSymbol}) </span>
      <span>{numShares} shares </span>
      <span>@ {price}</span>
    </div>
  );
};

export default TransactionCard;
