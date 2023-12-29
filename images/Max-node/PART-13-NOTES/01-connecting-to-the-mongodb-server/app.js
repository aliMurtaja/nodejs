const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

// To set the view-enging for express app.
app.set('view engine', 'ejs')
// To tell the express where our template files locate(default is `views`) 
app.set('views', path.join(__dirname, 'views'))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findById('5baa2528563f16379fc8a610')
  //   .then(user => {
  //     req.user = new User(user.name, user.email, user.cart, user._id);
  //     next();
  //   })
  //   .catch(err => console.log(err));
    next();
  });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(`mongodb+srv://murtajaali10:1553642589aA@cluster0.7dfepbx.mongodb.net/?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(3000);
    console.log("data-base connected")
  })
  .catch(err => {
    console.log(err);
  });
