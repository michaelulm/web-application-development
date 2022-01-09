
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

    // https://stackoverflow.com/questions/61358303/how-can-we-block-event-loop
    let flag = false;
    setTimeout(() => {
        // this callback never gets called
        // because event loop is blocked by while loop
        flag = true;
        response.write('Hello World\n');

    }, 1000);

    while (!flag) {
        console.log("still waiting")
    }
    console.log('never get here');

});

// Node.js will listen now to defined port, e.g. 8080, and handle any request to this port
// it's possible to change Port to any free port, e.g. standard web port 80 or also with SSL e.g. on default port 443
server.listen(port, function() {
    // just for cli debugging
    console.log('Server is listening to ' + address);
});
