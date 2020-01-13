const fs = require('fs');

// write and send response back to client
function send(response, responseBody) {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(responseBody);
}

// send all other static files to client
function sendFile(response, request, encoding = '', filename = '', download = false){
    if(filename == '')
        filename = request.url;

    console.log("send file " + filename);

    fs.readFile(__dirname + filename, encoding, function (err, data) {
        if (err) {
            console.log(err);
            response.statusCode = 404;
            response.end();
        } else {

            // write different header information for force download file at requesting e.g. export
            if(download){
                response.writeHead(200, {'Content-disposition': 'attachment; filename=export.csv'}); // to specify filename for download
            }

            response.end(data);
        }
    });
}

// redirecting to 'to'-location
function redirect(response, to) {
    response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
    response.end('302 Redirecting to /');
}


module.exports = {
    send,
    sendFile,
    redirect
}