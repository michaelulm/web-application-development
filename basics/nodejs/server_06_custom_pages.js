const http = require('http');
const url = require('url');
const fs = require('fs');

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

                // TODO refactor with better error handling
                response.statusCode = 404;
                // just a sample to show how to include custom error pages
                // this sample could also be used to deliver static web content / html files
                fs.readFile( __dirname + "/html/404.html", 'utf8', function(error, data) {
                    if (error) {
                        response.end(); // end to standard 404 error in browser, if file not found / accessible
                    } else {
                        response.end(data); // end with custom HTML Error page
                    }
                });

            } else {
                response.end(data);
            }
        });
        staticFile = true;
    }  else {
        headerText = "Welcome to Node.js Demo Page";
        linkText = `<a href="/edit">Edit</a> or <a href="/new">Add new</a> Data in this Demo, or go to a custom  <a href="/js/justademo.png">404 page</a>`;
    }

    if(!staticFile) {
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
    }
});

server.listen(8080, function() {
    console.log('Server is listening to http://localhost:8080/edit');
});
