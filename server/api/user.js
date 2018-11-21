const router = require('express').Router();
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
