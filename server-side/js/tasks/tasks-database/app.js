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
    response.writeHead(200, {'content-type': 'text/html'});

    const parts = request.url.split("/"); // e.g. localhost:8080/delete/42
    if(parts.includes('delete')){
       tasks = deleteTask(tasks, parts[2]);
    } else if(parts.includes('edit')){
        // TODO getForm
    } else if(parts.includes('new')){
        // TODO getForm
    }

    // iterate over all tasks
    tasks.forEach(task => {
        response.write(task.title + " <a href='/delete/" + task.id + "'>delete</a><br/> \n" );
    });

    // we need to send end of response -> otherwise endless loading
    response.end("");

});

// "start" server
server.listen(port, () => {
    console.log("Example Project will be available at http://localhost:" + port);
});
