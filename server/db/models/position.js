const Sequelize = require('sequelize');
const db = require('../db');

const Position = db.define('position', {
  tickerSymbol: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numShares: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
  },
});

module.exports = Position;
