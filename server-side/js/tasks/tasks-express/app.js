const express = require("express");
const port = 8080;

// load own created modules, to delete or save single task
const deleteTask = require("./delete"); // loads exported function from delete.js
const saveTask = require("./save");

// load form for new and edit task, and list overview for first page
const getForm = require("./form");
const getList = require('./list');

// example data, array of task (json) objects
let tasks = require("./data");

// initialise express server
const app = express();
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

// easy bind get or post requests with matching url path including variable e.g. id
// for multiple entities it's recommended e.g. use /task/delete/:id instead of root /delete/:id
app.get("/delete/:id", (request, response) => {
    tasks = deleteTask(tasks, request.params.id); // params.id will be parsed by /:id
    redirect(response, "/");
});

app.get("/edit/:id", (request, response) => {
    send(response, getForm(tasks, request.params.id));
});

app.get("/new", (request, response) => {
    send(response, getForm()); // new task will not need any id -> this will be added dynamically
});

// for multiple entities it's recommended e.g. use /task/save instead of root /save
app.post("/save", (request, response) => {
    const task = request.body;
    tasks = saveTask(tasks, task);
    redirect(response, '/');
});

app.get("/", (request, response) => {
    // default use case -> overview
    send(response, getList(tasks));
});

// "start" server and listen to defined port, other ports will not be recognized
app.listen(port, () => {
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