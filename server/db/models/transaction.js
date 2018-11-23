const Sequelize = require('sequelize');
const db = require('../db');

const Transaction = db.define('transaction', {
  tickerSymbol: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numShares: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
    },
  },
  action: {
    type: Sequelize.STRING,
    defaultValue: 'buy',
  },
  price: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Transaction;
