const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));


// ##public file::
// - in node, we can't use file-System(Files) directally.
// - whatever file we use, there is respective route defined in express, which is responsible to render our file(html).
// - but what-about other files like (css, js etc), which are used directally.
//     - to do that we have to give the permissing for that file/folder to be avaliable publically and access directally
// - in node it is complex method, but express gives us Middleware funciton using that we can give specific file/folder to be avaliable publically and access directall.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
