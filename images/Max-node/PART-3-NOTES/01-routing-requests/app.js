const http = require('http');
const fs = require('fs');

// `createServer`: this is most important method provided by the http core module of node.
// it is used to create the server, it takes litener as a argument and this litener keep on running to liten the incoming request.
// this function will retun the a new instance of `Server` which we can liten in any port, default is 3000
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  
  // 'Content-Type': this is header known by browser and we can add it by using `setHeader` megthod.
  // we can attach as many as we want
  res.setHeader('Content-Type', 'text/html');

  // this is body of response that goes as a stream. here we prepare the data to go as a response
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');

  // here we are finally send the data
  res.end();
});

server.listen(3000);
