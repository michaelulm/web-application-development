const http = require('http');

// start node with this command
// $ node server_02_html_response.js

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' }); // <<< take care about content type, first try, later change to 'text/html'

    // write HTML and ...
    const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hello World HTML</title>
      </head>
      <body>
        <p>Hello World!</p>
        <p>Hello Kapfenberg!</p>
      </body>
    </html>`;

    // ... send HTML Code / response to client
    response.end(body);
});

server.listen(8080, function() {
    console.log('Server is listening to http://localhost:8080');
});
