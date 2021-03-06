const router = require('express').Router();
const axios = require('axios');
const { User, Position, Transaction } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get('/portfolio', async (req, res, next) => {
  try {
    const positions = await Position.findAll({
      where: { userId: req.user.id },
    });
    const symbols = positions.map(position => position.dataValues.tickerSymbol);
    if (!symbols.length) {
      res.json([]);
      return;
    }
    const stockRes = await axios.get(
      `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbols.join(
        ','
      )}&types=quote`
    );

    const userPositions = positions.map(position => {
      const symbol = position.dataValues.tickerSymbol;
      const stockInfo = stockRes.data[symbol].quote;
      const stockPrice = stockInfo.latestPrice;
      const totalStockVal = stockPrice * position.dataValues.numShares;

      let trend = 'same';
      if (stockInfo.latestPrice > stockInfo.open) {
        trend = 'up';
      } else if (stockInfo.latestPrice < stockInfo.open) {
        trend = 'down';
      }
      return {
        ...position.dataValues,
        totalStockVal,
        stockPrice,
        trend,
      };
    });
    res.json(userPositions);
  } catch (err) {
    next(err);
  }
});

router.get('/history', async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = await User.findByPk(id, {
      include: [{ model: Transaction }],
    });
    res.json(user.transactions);
  } catch (err) {
    next(err);
  }
});

router.post('/buy/:ticker/:quantity', async (req, res, next) => {
  try {
    const id = req.user.id;
    const symbol = req.params.ticker;
    const quantity = +req.params.quantity;
    const balance = req.user.balance;
    const stockRes = await axios.get(
      `https://api.iextrading.com/1.0/stock/${symbol}/book`
    );
    const stockInfo = stockRes.data.quote;
    const stockPrice = stockInfo.latestPrice;
    const totalStockPrice = stockPrice * quantity;

    if (totalStockPrice > balance) {
      res.status(400).send('Balance too low!');
      return;
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

    res.json({ balance: req.user.balance });
  } catch (err) {
    next(err);
  }
});
