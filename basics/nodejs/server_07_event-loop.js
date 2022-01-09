
// start node with this command $ node server_01_helloworld.js
// after start node, please use your browser to get first response, open http://localhost:8080 in your browser
// this is a simple example for demonstration of Node.js http webserver, starting server, and first http request and responst

const http = require('http');
const port = 8080;
let address = "http://localhost:" + port;

// first output / response to web request
// any request will be handle by this method, it's the first entry point of Node.js Webserver
const server = http.createServer(function(request, response) {

    // creates an response with HTTP Status code 200
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });

    let d = new Date();

    setTimeout(function(){
        let now = new Date();
        let diff = now - d;
        console.log("This is the second statement 3 " + diff);

        // writes String to current response
        response.write('Hello World\n');

        // sends response to client, and client will see previous text
        response.end('Hello Kapfenberg\n');
    }, 5000);


    // Take a look where console output will appear -> browser (client) or console (server)
    console.log('got request from client');

});

// Node.js will listen now to defined port, e.g. 8080, and handle any request to this port
// it's possible to change Port to any free port, e.g. standard web port 80 or also with SSL e.g. on default port 443
server.listen(port, function() {
    // just for cli debugging
    console.log('Server is listening to ' + address);
});
