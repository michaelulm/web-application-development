// load mysql module to operate with MySQL database
const mysql = require("mysql");

// first we will need a connection, use init-*.sql files to create database and table, and to insert first demo data
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes-db',
});

// initially connect to database
connection.connect();

// we are using Promise object, because of asynchronous handling of node.js
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise
// if query was successful, .then() we will use the results for later operations, take a look where model.getAll() is used

// get all notes
function getAll() {
    // createa new Promise object, which have to major status
    // resolve -> success -> we will get result set(s)
    // reject  -> error   -> we are currently log errors in console and reject this error
    return new Promise((resolve, reject) => {
        // create query
        const query = 'SELECT * FROM notes';
        // do query, and wait for resolve or reject
        connection.query(query, (error, results) => {
            if (error) {
                console.log(error);
                reject(error);

            // there's usually no error, so we are able to use result (set)
            } else {
                resolve(results);
            }
        });
    });
}

// get one note by note's id
function getOne(id) {
    return new Promise((resolve, reject) => {
        // use prepared statements (!)
        const query = 'SELECT * FROM notes WHERE id = ?';

        // fill values for prepared statement -> value = array with id
        connection.query(query, [id],(error, results) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

// insert a new note
function insert(note) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO notes (note) VALUES (?)';
        connection.query(query, [note.note],(error, results) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
// update an existing note
function update(note) {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE notes SET note = ? WHERE id = ?';

        // fill values for prepared statement -> value = array with note AND id
        connection.query(query, [note.note, note.id],(error, results) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
// remove an existing note
function remove(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM notes WHERE id = ?';
        connection.query(query, [id],(error, results) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

module.exports = {
    getAll,
    get(id) {
        return getOne(id);
    },
    delete(id) {
        return remove(id);
    },

    // model is handling correct database access with selecting insert method for note without any id
    // otherwise model is handling request with update method, no previous decision outside the model is needed
    save(note) {
        if (!note.id) {
            return insert(note);
        } else {
            return update(note);
        }
    },
};
