const http = require('http');

// add require definition to work with url module and store to constant url
const url = require('url');

// start node with this command
// $ node server_03_handle-get.js

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

    // read current URL parameters
    const parsedURL = url.parse(request.url, true);

    const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hello World HTML</title>
      </head>
      <body>
        <p>Hello World!</p>
        <p>Hello Kapfenberg!</p>
        <p>Hello ${parsedURL.query.name}!</p>
      </body>
    </html>`;

    response.end(body);
});

server.listen(8080, function() {
    console.log('Server is listening to http://localhost:8080/?name=Michael%20Ulm');
});
