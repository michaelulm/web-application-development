const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;
let address = "http://localhost:" + port;

// start node with this command
// $ node server_05_difference-server-client-javascript.js
// this examples describes which JavaScript files will be handled on Node.js server, and which JavaScript files will be delivered to client AND run at client


// includes a counter function, on SERVER SIDE
const increaseCounter = require('./counter');

const server = http.createServer(function(request, response) {

    // increase server Side counter at every Request
    // TODO: explain why counter will increase by 3 ?
    var counterRequests = increaseCounter();

    // read current URL parameters
    const parsedURL = url.parse(request.url, true);
    console.log(parsedURL);

    // get current url for navigation through web application
    const parts = request.url.split('/');

    headerText = "";
    linkText = `<a href="/">back</a>`;

    staticFile = false;

    // first routing to decide which REQUEST should be send a special RESPONSE to server
    if(parts.includes('edit')){
        headerText = "Edit data ";
    } else if(parts.includes('new')){
        headerText = "Add new data ";


    } else if (parsedURL.path.includes('js/') || parsedURL.path.includes('css/')) {
        // (!) take care, we will use another handling
        fs.readFile(__dirname + request.url, 'utf8', function(err, data) {
            if (err) {
                response.statusCode = 404;
                response.end();
            } else {
                response.end(data);
            }
        });
        staticFile = true;
    } else {
        headerText = "Welcome to Node.js Demo Page";
        linkText = `<a href="/edit">Edit</a> or <a href="/new">Add new</a> Data in this Demo`;
    }


    // this HTML Code will be generated at SERVER SIDE, and will be deliver to clients web browser after requesting the Server, which currently run at http://localhost:8080/<example-path>
    if(!staticFile) {
        response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        const body = `<!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <title>Hello Node.js Demo</title>
                    <script src="js/demo-client.js" type="text/javascript" ></script><!-- will include JS and deliver to client, and will run in clients web browser -->
                    <link rel="stylesheet" href="css/main.css">
                  </head>
                  <body>
                    <h1>${headerText}</h1>
                    <p>${linkText}</p>
                    <p>${parsedURL.path}</p>
                    <p id="output-server">Server Counter: ${counterRequests}</p>
                    <p id="output-client"></p>
                  </body>
                </html>`;

        response.end(body);
    }
});

server.listen(8080, function() {
    console.log('Server is listening to http://localhost:8080/edit');
});
