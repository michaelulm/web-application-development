const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
  console.log("test output");
});

server.listen(8080, 'localhost', () => {
  console.log('Server running at http://localhost:8080/');
});
