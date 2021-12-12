// load mysql module to operate with MySQL database
const mysql = require("mysql");

// first we will need a connection, use init-*.sql files to create database and table, and to insert first demo data
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webappdev_tasks',
});

// well known query to read data -> SELECT * FROM <table name>
let query = "SELECT * FROM tasks";

// could be used e.g. within an separate module
// so we would load e.g. module with require("...") and pass getAllTasks function
// in that case we will need e.g. a Promise-Object with information about
// - success = resolve(...)
// - failure = reject(...)
function getAllTasks(){
    return new Promise((resolve, reject) => {
        connection.query(query, (error, rows) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Database Query is finished");
                resolve(rows);
            }
        });
    });
}

console.log("before");
// handle response within .then() and go through all elements in case of resolved Promise response
getAllTasks().then(
    results => {
        console.log("Got result from query:")
        results.forEach((result) => {
            console.log(` - ${result.title}: ${result.description}`);
        });
    },
    error => {
        // e.g. try to rename database name or turn off database
        console.log("handling error");
    }
)
console.log("after");