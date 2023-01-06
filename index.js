const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
      res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    } else if (req.url === '/json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'this is json router' }));
      } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found\n');
    }
  });

  server.listen(5000, () => {
    console.log('Server running at http://:5000/');
  });