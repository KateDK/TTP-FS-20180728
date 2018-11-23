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

router.get('/:id/buy/:ticker', async (req, res, next) => {
  try {
    const id = req.params.id;
    const symbol = req.params.ticker;

    const stockRes = await axios.get(
      'https://api.iextrading.com/1.0/stock/' + `${symbol}` + '/book'
    );

    res.json(stockRes.data);
  } catch (err) {
    next(err);
  }
});
