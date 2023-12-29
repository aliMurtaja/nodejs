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
  User.findById('65044048455a1227f04f736e')
    .then(user => {
      req.user = user;
      // here `user` is an object(instance) of modal `User`, so the `addToCart` method is availiable for this object bcs of `userSchema.methods.addToCart`
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
.connect(`mongodb+srv://murtajaali10:1553642589aA@cluster0.7dfepbx.mongodb.net/shop?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
