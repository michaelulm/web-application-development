// this JavaScript will be included at Node.js server, and it's running on Node.js
// SERVER SIDE usage

var counterRequests = 0;

function increaseCounter(){
    counterRequests++;

    return counterRequests
}

module.exports = increaseCounter;