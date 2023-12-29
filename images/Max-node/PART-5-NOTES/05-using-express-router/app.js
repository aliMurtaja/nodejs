const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// here, we are getting mini express app

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));


// now we can merge with actual express app
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
