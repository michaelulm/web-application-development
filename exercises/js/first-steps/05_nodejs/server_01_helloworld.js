// start node with this command $ node server_01_helloworld.js
// after start node, please use your browser to get first response, open http://localhost:8080 in your browser
// this is a simple example for demonstration of Node.js http webserver, starting server, and first http request and responst

const http = require('http');

// first output / response to web request
// any request will be handle by this method, it's the first entry point of Node.js Webserver
const server = http.createServer(function(request, response) {

    // creates an response with HTTP Status code 200
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    // writes String to current response
    response.write('Hello World\n');

    // sends response to client, and client will see previous text
    response.end('Hello Kapfenberg\n');

    console.log('got request from client');
});

// Node.js will listen now to port 8080 and handle any request to this port
// it's possible to change Port to any free port, e.g. standard web port 80 or also with SSL on port 443
server.listen(8080, function() {
    // just for cli debugging
    console.log('Server is listening to http://localhost:8080');
});
