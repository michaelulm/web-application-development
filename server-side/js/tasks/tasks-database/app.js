// load http module to create http server
const http = require("http");
const port = 8080;

// load first own created module, to delete single task
const deleteTask = require("./delete"); // loads exported function from delete.js

// load form for new and edit task
const getForm = require("./form");

// example data, array of task (json) objects
let tasks = require("./data");

// initialise server
const server = http.createServer((request, response) => {

    const parts = request.url.split("/"); // e.g. localhost:8080/delete/42
    if(parts.includes('delete')){
       tasks = deleteTask(tasks, parts[2]);
    } else if(parts.includes('edit')){
        // TODO how to handle wrong requests, e.g. missing data
        send(response, getForm(tasks, parts[2]));
    } else if(parts.includes('new')){
        send(response, getForm());
    } else {

        // creating overview list
        let responseOverview = "";
        // iterate over all tasks
        tasks.forEach(task => {
            responseOverview += task.title +
                " <a href='/delete/" + task.id + "'>delete</a> | " +
                " <a href='/edit/" + task.id + "'>edit</a> <br/> \n"
            ;
        });
        responseOverview += "<a href='/new'>new Task</a>";
        send(response, responseOverview);
    }



});

// "start" server
server.listen(port, () => {
    console.log("Example Project will be available at http://localhost:" + port);
});


function send(response, responseBody){
    response.writeHead(200, {'content-type': 'text/html'});
    // we need to send end of response -> otherwise endless loading
    response.end(responseBody);
}