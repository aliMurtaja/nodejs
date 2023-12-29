const express = require('express');

const app = express();

//NOTE THAT if we use `use` middlevare, it doesn't match exact path.
//but if we use other middlevare sach as (get, post, patch, delete etc), it match exact path.

app.use('/', (req, res, next) => {   
    console.log('This always runs!');
    next();
});

// // above middlevare is same as::
//  app.use((req, res, next) => { 
//   console.log('This always runs!');
//   next();
// });

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  // next()  
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
