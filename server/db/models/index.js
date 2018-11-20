const User = require('./user');
const Position = require('./position');
const Transaction = require('./transaction');

User.belongsToMany(Transaction, {
  through: { model: 'UserTransaction', unique: false },
});
Transaction.belongsToMany(User, {
  through: { model: 'UserTransaction', unique: false },
});

Position.belongsTo(User);
User.hasMany(Position);

module.exports = { User, Position, Transaction };
