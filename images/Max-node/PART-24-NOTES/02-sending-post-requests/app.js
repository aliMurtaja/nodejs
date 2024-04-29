const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json


// Client-Side: CORS is enforced by web browsers on the client side. When a web page hosted on one domain makes a request to a different domain (cross-origin request), the browser checks if the server of the target domain allows the request. If not, the browser blocks the request to protect against potential security risks.
// Server-Side: While the enforcement of CORS happens on the client side, the server plays a crucial role in determining whether to allow or deny cross-origin requests. The server needs to include specific CORS headers in its responses to inform the browser about which origins are permitted to access its resources.
app.use((req, res, next) => {
    // here we set at beging, so that it can start its journy properly
    // To allow the origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    // To allow the method
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    // To allow the header
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log("reached 1", req.body)
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);