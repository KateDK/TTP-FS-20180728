const User = require('./user');
const Position = require('./position');
const Transaction = require('./transaction');

Transaction.belongsTo(User);
User.hasMany(Transaction);
Position.belongsTo(User);
User.hasMany(Position);

module.exports = { User, Position, Transaction };
