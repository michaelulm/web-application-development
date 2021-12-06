const http = require("http");
const port = 8080;

// example data
const tasks = [
    {id: 1, title: "User Story 1", description: "List Overview"},
    {id: 2, title: "User Story 2", description: "Search"},
    {id: 3, title: "User Story 3", description: "Detail View"},
    {id: 4, title: "User Story 4", description: "Edit existing Data"},
    {id: 5, title: "User Story 5", description: "Add new Data"}
];

// initialise server
const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'});

    // iterate over all tasks
    tasks.forEach(task => {
        response.write(task.title + "<br/> \n" );
    });

    // we need to send end of response -> otherwise endless loading
    response.end("");

});

// "start" server
server.listen(port, () => {
    console.log("Example Project will be available at http://localhost:" + port);
});