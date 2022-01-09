const http = require("http");
const port = 8080;

const deleteTask = require('./delete'); // require will load <filename>.js -> helper.js

// TODO REPLACE with modul (3)
// TODO REPLACE with database
let tasks = require("./data");


const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'})

    // TODO ROUTING first implementation (2)
    const parts = request.url.split("/"); // e.g. localhost:8080/delete/42
    if(parts.includes('delete')){
        tasks = deleteTask(tasks, parts[2]);
    }

    // TODO REFACTOR table and createRow (1)
    tasks.forEach(task => {
        response.write(task.title + "<br/> \n" );
    });
    response.end("\n");
});

server.listen(port, () => {
    console.log("Tasks will be available at http://localhost:" + port);
});