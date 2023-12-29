const http = require('http');
const fs = require('fs');

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
    const body = [];
    
    // request body keep on coming as a chunk and store in buffer for limited time.
    // this buffer stores data using utf-8 encoding by-default.
    // we will send text in request-body, and these text are stored in buffer as explained above, so we have to parse buffer to get actual data.
    req.on('data', (chunk) => {
      // here `chunk` is our coming data which is stored in buffer.
      console.log(chunk);
        // <Buffer 6d 65 73 73 61 67 65 3d 79 79 79 79 79>
        // this is binary data but shows as a hex code 
      
      console.log(chunk.toString());
      body.push(chunk);
    });
    req.on('end', () => {

      // here, All the data have come and availiable in as a buffer-array in body array, so we have to parse it. 
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      // this is IO operation happens on os side, but this is block opration as methode name indicated `Sync` in last(`writeFileSync`)
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');

    // NOTE THAT here we return the response.
    // the reason is that we can't set any header, write any response and send any response after sending response
    return res.end();
  }

  // we had got Err, if we would have not use `return` above
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
