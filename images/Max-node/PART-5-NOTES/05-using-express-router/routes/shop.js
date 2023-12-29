const express = require('express');

const router = express.Router();

//here, `router` is mini express app, which we can merge with actual express app.
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;
