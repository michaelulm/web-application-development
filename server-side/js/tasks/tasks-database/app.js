// load http module to create http server
// this http server is "stupid" so we have to implement how to handle request and answer with matching response
const http = require("http");

// load other nodejs module for easy parsing http request to receive object
const querystring = require("querystring"); // https://nodejs.org/api/querystring.html
const port = 8080;

// TODO combine both modules,
// load own created modules, to delete or save single task
const deleteTask = require("./delete"); // loads exported function from delete.js
const saveTask = require("./save");

// load form for new and edit task, and list overview for first page
const getForm = require("./form");
const getList = require('./list');

// example data, array of task (json) objects
let tasks = require("./data");

// TODO add data model to load from
// - JSON
// or
// - Database -> MySQL or MariaDB

// initialise server to handle incoming requests
const server = http.createServer((request, response) => {

    // split complete url and use specific parts to identify dataset / task
    const parts = request.url.split("/"); // e.g. localhost:8080/delete/42

    if(parts.includes('delete')){
       tasks = deleteTask(tasks, parts[2]);
       redirect(response, "/");

    } else if(parts.includes('edit')){
        // TODO how to handle wrong requests, e.g. missing data
        send(response, getForm(tasks, parts[2])); // e.g. localhost:8080/edit/42

    } else if(parts.includes('new')){
        send(response, getForm()); // new task will not need any id -> this will be added dynamically

    } else if(parts.includes('save') && request.method === 'POST'){ // localhost:8080/save
        let requestBody = '';

        // read data stream from POST Request
        request.on('readable', () => {
            const data = request.read();
            requestBody += data != null ? data : '';
        });

        // request data stream finished and server is able to start server-side handling of request
        request.on('end', () => {
            const task = querystring.parse(requestBody);
            tasks = saveTask(tasks, task);
            redirect(response, '/');
        });

    } else {
        // default use case -> overview
        send(response, getList(tasks));

    }

});

// "start" server and listen to defined port, other ports will not be recognized
server.listen(port, () => {
    console.log("Example Project (Task List) will be available at http://localhost:" + port);
});

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