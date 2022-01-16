const express = require("express");
const port = 8080;

const path = require('path');

// load task module
const taskRouter = require("./task");
// TODO possible to load other modules with MVC pattern
// const taskRouter = require("./roommate");

// load helpers
const helper = require('./helpers/responses');
const send = helper.send;
const redirect = helper.redirect;

// initialise express server
const app = express();

// use static content, like images
// e.g. http://localhost/images/edit.png will load /public/images/edit.png
app.use(express.static(__dirname + "/public"));

// parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

// https://pugjs.org/api/getting-started.html
// set template engine and paths for views folders
app.set("view engine", "pug");
app.set('views', [path.join(__dirname, '/views'),
    path.join(__dirname, '/task/views')
]);

// currently only one module exists, we will redirect to task module
// otherwise standard view should be chosen or default page should be selected
app.get("/", (request, response) => response.redirect("/task"));

// define new route for express server, and use task router
app.use("/task", taskRouter);
// TODO combine of all course project shoud be possible to use different routers e.g.
// app.use("/roommate", roommateRouter);

// "start" server and listen to defined port, other ports will not be recognized
app.listen(port, () => {
    console.log("Example Project (Task List) will be available at http://localhost:" + port + " or at http://localhost:" + port + "/task");
});
