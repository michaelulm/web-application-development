const http = require('http');
const port = 8080;
let address = "http://localhost:" + port;

// start node with this command
// $ node server_02_html_response.js

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' }); // <<< take care about content type, first try, later change to 'text/html'
    // response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

    // write HTML and ...
    const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hello World HTML</title>
      </head>
      <body>
        <p>Hello World!</p>
        <p style="color:red;">Hello Kapfenberg!</p>
      </body>
    </html>`;

    // ... send HTML Code / response to client
    response.end(body);
});

server.listen(8080, function() {
    console.log('Server is listening to ' + address);
});
