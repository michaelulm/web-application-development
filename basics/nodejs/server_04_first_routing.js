const http = require('http');
const url = require('url');
const port = 8080;
let address = "http://localhost:" + port;

// start node with this command
// $ node server_04_first_routing.js

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

    // read current URL parameters
    const parsedURL = url.parse(request.url, true);
    console.log(parsedURL);

    // get current url for navigation through web application
    const parts = request.url.split('/');

    headerText = "";
    linkText = `<a href="/">back</a>`;

    // first routing to decide which REQUEST should be send a special RESPONSE to server
    if(parts.includes('edit')){
        headerText = "Edit data ";
    } else if(parts.includes('new')){
        headerText = "Add new data ";
    } else {
        headerText = "Welcome to Node.js Demo Page";
        linkText = `<a href="/edit">Edit</a> or <a href="/new">Add new</a> Data in this Demo`;
    }

    const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hello Node.js Demo</title>
      </head>
      <body>
        <h1>${headerText}</h1>
        <p>${linkText}</p>
        <p>${parsedURL.path}</p>
      </body>
    </html>`;

    response.end(body);
});

server.listen(8080, function() {
    console.log('Server is listening to ' + address);
    console.log('Open ' + address + '/edit for first routing');
    console.log('Open ' + address + '/new to try another route');
});
