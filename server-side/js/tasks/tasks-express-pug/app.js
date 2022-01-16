const express = require("express");
const port = 8080;

// load task module
const taskRouter = require("./task");

// load helpers

const helper = require('./helpers/responses');
const send = helper.send;
const redirect = helper.redirect;

// // load own created modules, to delete or save single task
// const deleteTask = require("./delete"); // loads exported function from delete.js
// const saveTask = require("./save");
//
// // load form for new and edit task, and list overview for first page
// const getForm = require("./task/views/form");
// const getList = require('./task/views/list');
//
// // example data, array of task (json) objects
// let tasks = require("./task/models/data");

// initialise express server
const app = express();

// use static content, like images
app.use(express.static(__dirname + "/public"));

//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

// app.get("/", (request, response) => {
//     // default use case -> overview
//     send(response, getList(tasks));
// });

// currently only one module exists, we will redirect to task module
app.get("/", (request, response) => response.redirect("/task"));

// define new route for express server, and use task router
app.use("/task", taskRouter);
// TODO combine of all course project shoud be possible to use different routers e.g.
// app.use("/roommate", roommateRouter);

// "start" server and listen to defined port, other ports will not be recognized
app.listen(port, () => {
    console.log("Example Project (Task List) will be available at http://localhost:" + port + " or at http://localhost:" + port + "/task");
});
