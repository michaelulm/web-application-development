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

console.log("before");
// do query with initialized connection
connection.query(query, (error, rows) => {
    // simple error handling, just for demonstration
    // used e.g. to give response "not found", "not connected",... or something else to user
    if (error) {
        console.log(error);
    } else {
        // console.log(rows); // to explore RowDataPacket(s)

        // go through all elements
        rows.forEach((row) => {
            console.log(` - ${row.title}: ${row.description}`);
        });
    }
});
console.log("after");