const http = require('http');
const fs = require('fs');

// load special "notes" modules, self implemented modules

// initialize data, which could be from different data sources, e.g. json file or database (different versions available)
//let notes = require('./notes_data');            // v1 in-memory
let notes = require('./models/notes_data_v2_json'); // v2 json-file
const deleteNote = notes.deleteNote;
const saveNote = notes.saveNote;

// creates Overview List with HTML
const getList = require('./views/notes_list'); // will only export single function
const getForm = require('./views/notes_form');

// load additional module formidable, A Node.js module for parsing form data
// more details at https://www.npmjs.com/package/formidable
const formidable = require('formidable');

// entry point for each Request to create matching response
const server = http.createServer((request, response) => {
  // get current url for navigation through web application
  const parts = request.url.split('/');

  // delete method to remove current note
  if (parts.includes('delete')) { // -> localhost:8080/delete/42 -> parts[0] = localhost:8080 parts[1] = delete, parts[2] = 42
    // notes = deleteNote(notes, parts[2]);       // v1 in-memory

    notes.getAll().then(                                // v2 json-file
        (notes) => {
          deleteNote(notes, parts[2]).then(
              (notes) => {
                redirect(response, '/');
              }
          );
        });

    // create new note
  } else if (parts.includes('new')) {
    send(response, getForm());


    // edit exiting note
  } else if (parts.includes('edit')) {
    // will display a web form for user interaction
    // send(response, getForm(notes, parts[2]));        // v1 in-memory
    notes.getAll().then(                                // v2 json-file
        (notes) => {
          send(response, getForm(notes, parts[2]));
        },
    )


    // save new note AND method is POST and not GET
  } else if (parts.includes('save') && request.method === 'POST') {

    // use formidable to handle incoming POST Request and Form Data https://www.npmjs.com/package/formidable
    const form = new formidable.IncomingForm();
    // form.parse(request, (err, note, files) => {
    //   console.log('data', note);
    //   notes = saveNote(notes, note);                    // v1 in-memory
    //   redirect(response, '/');
    // });

    form.parse(request, (err, note, files) => {
      notes.getAll().then(                                // v2 json-file
          (notes) => {
            saveNote(notes, note).then(
                (notes) => {
                  redirect(response, '/');
                }
            );
          });
    });

  // standard response if images are in url, no special handling is needed, ...
  } else if (parts.includes('images') ) {
    fs.readFile(__dirname + request.url, (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end();
      } else {
        response.end(data);
      }
    });

  // ... same for styles
  } else if (request.url === '/styles/style.css') {
    // (!) take care, we will use another handling
    fs.readFile(__dirname + request.url, 'utf8', function(err, data) {
      if (err) {
        response.statusCode = 404;
        response.end();
      } else {
        response.end(data);
      }
    });
  } else {

    // send(response, getList(notes));                   // v1 in-memory
    notes.getAll().then(                                 // v2 json
        (notes) => {
          send(response, getList(notes));
        },

        // TODO handling error from appointments/milestones example
        // (error) =>  {
        //   send(response, getError(error));
        // }

    ).catch(error => {
      console.error("error ", error);
    });

  }
});

// write and send response back to client
function send(response, responseBody) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(responseBody);
}

server.listen(8080, () =>
  console.log('Server and Notes Application is listening to https://localhost:8080'),
);

// redirecting to 'to'-location
function redirect(response, to) {
  response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
  response.end('302 Redirecting to /');
}