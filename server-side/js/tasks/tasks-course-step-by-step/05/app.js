const http = require("http");
const port = 8080;

const deleteTask = require('./delete'); // require will load <filename>.js -> helper.js
// TODO REPLACE with modul (3)
// TODO REPLACE with database

let tasks = require("./data");

// TODO HTML Form and first form handling (4)
const getForm = require('./form');
// TODO HTML Table to display all tasks (5)
const getList = require('./list');


const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'})

    // TODO ROUTING first implementation (2)
    const parts = request.url.split("/"); // e.g. localhost:8080/delete/42
    if(parts.includes('delete')){
        tasks = deleteTask(tasks, parts[2]);
        // TODO ADD redirect after delete files
        redirect(response, '/');
    }

    // TODO HTML Form and first form handling (4)
    else if (parts.includes('new')){
        send(response, getForm());
    }
    else if (parts.includes('edit')){
        send(response, getForm(tasks, parts[2]));
    }

    // TODO HTML Table to display all tasks (5)
    else {
        send(response, getList(tasks));
    }

});

server.listen(port, () => {
    console.log("Tasks will be available at http://localhost:" + port);
});

function send(response, responseBody){
    response.writeHead(200, {'content-type':'text/html'});
    response.end(responseBody);
}

function redirect(response, to){
    response.writeHead(302, { location: to, 'content-type': 'text/plain'});
    response.end('302 Redirect to ' + to);
}