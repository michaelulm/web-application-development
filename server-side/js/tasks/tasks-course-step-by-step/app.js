const http = require("http");
// TODO handle POST Requests (6)
const querystring = require("querystring"); // https://nodejs.org/api/querystring.html
const port = 8080;

const deleteTask = require('./delete'); // require will load <filename>.js -> helper.js
// TODO REPLACE with modul (3)
// TODO REPLACE with database

let tasks = require("./data");

// TODO model for database access (7)
// initialize model object
let model = require('./model'); // will export several functions, in this case a complete database model

// TODO HTML Form and first form handling (4)
const getForm = require('./form');
// TODO HTML Table to display all tasks (5)
const getList = require('./list');
// TODO handle add and edit new task (6)
const saveTask = require('./save');


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

        model.get(parts[2]).then(
            task => {
                console.log(task);
                send(response, getForm(task));
            },
            error => send(response, error),
        );
    }


    // TODO handle POST Requests (6)
    else if(parts.includes('save') && request.method === 'POST'){
        let body = '';
        // read data stream from POST Request
        request.on('readable', () => {
           const data = request.read();
           body += data !== null ? data : '';
        });
        // request data stream finished and server is able to start after end event
        request.on('end', () => {
           const task = querystring.parse(body); // body will be filled during readable Event(s)
           tasks = saveTask(tasks, task);
           redirect(response, "/");
        });
    }

    // TODO HTML Table to display all tasks (5)
    else {

        // getAll method of model will be called
        // promise will trigger then method, when finished
        model.getAll().then(
            tasks => {
                send(response, getList(tasks))
            },
            error => {
                console.log("error getAll()")
            }
        );


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