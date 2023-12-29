const http = require('http');

const express = require('express');

// here, express() will give the express instance which we can use to make our node app into express app
const app = express();

// here, `app.use` is middlevare for any request.
// and this is most important feature in express.
// and there are lot of library are made in respect of express middlevare
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

// here, `app` could also works as a litener for `createServer`  
const server = http.createServer(app);

// we could also directally liten any request
// but behing the scene it uses `http` module to create the server using `createServer`.
server.listen(3000);
