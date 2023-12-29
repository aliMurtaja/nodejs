const express = require('express');
const bodyParser = require('body-parser');

const app = express();



// here, `bodyParser.urlencoded({extended: false})` is made with respect to express middleware.
// so behind the scene it will produce(yield)::
    // (req, res, next) => {
    //   // its logic to parse the request-body
    
    //   to go to next middleware3
    //   next()
    // }
// thus, we can use it in Express middleware:: app.use(bodyParser.urlencoded({extended: false}));
// and there are lot of library which embrace express
// means, those library apply its logic and at the end calls `next()` to go to next middleware of the request 
app.use(bodyParser.urlencoded({extended: false}));
// NOTE THAT behind the scene it uses stream/buffer concept to get/post stream of data



app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {

    //here, we will get parsed body Object.
    //bcs we are using :- app.use(bodyParser.urlencoded({extended: false}));
      // and this middleware work for every post request 
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
