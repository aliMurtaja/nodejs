const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
// here we are sending html file, but keep in mind file will be sent as a stream of data.

// - path.join::
//     - whenever we access file from the file-system(raw/text files).
//     - we have to use absolute path, and different os use absolute path differentlly.
//     - that'y `path.join` helps us to get absolute path according to os.
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
