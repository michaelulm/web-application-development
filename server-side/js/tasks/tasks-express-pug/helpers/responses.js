
// sending response to client and end request stream
// added send() function to reduce duplicated code
function send(response, responseBody){
    response.writeHead(200, {'content-type': 'text/html'});
    // we need to send end of response -> otherwise endless loading
    response.end(responseBody);
}

// redirects request to another URL, e.g. after delete one task
function redirect(response, to){
    response.writeHead(302, {location: to, 'content-type': 'text/plain'});
    response.end('302 Redirect to ' + to);
}

module.exports = {
    send,
    redirect
}