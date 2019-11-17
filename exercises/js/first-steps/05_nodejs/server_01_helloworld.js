const http = require('http');

// start node with this command
// $ node server_01_helloworld.js

// first output / response to web request
const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    response.write('Hello World\n');

    response.end('Hello Kapfenberg\n');

    console.log('got request from client');
});

// node will listen now to port 8080 and handle any request to this port
server.listen(8080, function() {
    // just for cli debugging
    console.log('Server is listening to http://localhost:8080');
});
