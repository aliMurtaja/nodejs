const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {

    // To allow the origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    // To allow the method
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    // To allow the header
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log("reached 1")
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);