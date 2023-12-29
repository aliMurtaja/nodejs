// In this section we are defining routes(for front-end) and their respective routers in a standard way

// In this section you have to see Folder structure in respect of
    // - router --> controller --> modal --> view 

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// To set the view-enging for express app.
app.set('view engine', 'ejs')
// To tell the express where our template files locate(default is `views`) 
app.set('views', path.join(__dirname, 'views'))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
