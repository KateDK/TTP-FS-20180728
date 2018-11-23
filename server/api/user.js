const router = require('express').Router();
const Request = require('request');
const axios = require('axios');
const { User, Position, Transaction } = require('../db/models');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/portfolio', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      include: [{ model: Position }],
    });
    res.json(user.positions);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/history', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      include: [{ model: Transaction }],
    });
    res.json(user.transactions);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/buy/:ticker/:quantity', async (req, res, next) => {
  try {
    const id = req.user.id;
    const symbol = req.params.ticker;
    const quantity = req.params.quantity;
    const balance = req.user.balance;
    const stockRes = await axios.get(
      'https://api.iextrading.com/1.0/stock/' + `${symbol}` + '/book'
    );
    const stockInfo = stockRes.data.quote;
    const stockPrice = stockInfo.latestPrice;
    const totalStockPrice = stockPrice * quantity;

    if (totalStockPrice > balance) {
      res.err('Balance too low!');
    } else {
      //update balance in db
      await User.update(
        { balance: balance - totalStockPrice },
        { where: { id: id } }
      );
      //update session balance
      req.user.balance = balance - totalStockPrice;

      await Transaction.create({
        userId: id,
        tickerSymbol: stockInfo.symbol,
        numShares: quantity,
        price: stockPrice,
      });
      const [position, created] = await Position.findOrCreate({
        where: { userId: id, tickerSymbol: stockInfo.symbol },
        defaults: { numShares: quantity },
      });
      if (!created) {
        await position.update({ numShares: position.numShares + quantity });
      }
    }

    res.json(stockRes.data);
  } catch (err) {
    next(err);
  }
});
