const router = require('express').Router();
const { User, Position, Transaction } = require('../db/models');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id, {
      include: [{ all: true }],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
