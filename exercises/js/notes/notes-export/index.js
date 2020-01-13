const http = require('http');

// initialize model object
let model = require('./model'); // will export several functions, in this case a complete database model

// init helper module with some useful functions
const helper = require('./helper');
const send = helper.send;
const sendFile = helper.sendFile;
const redirect = helper.redirect;

// creates Overview List with HTML
const getList = require('./views/list'); // will only export single function
const getForm = require('./views/form');

// load additional module formidable, A Node.js module for parsing form data
// more details at https://www.npmjs.com/package/formidable
const formidable = require('formidable');

// CSV export with https://www.npmjs.com/package/fast-csv
// load additional module fast-csv, a Node.js module for exporting stored data to CSV
const fastcsv = require("fast-csv");
const fs = require("fs");


// entry point for each Request to create matching response
const server = http.createServer((request, response) => {
  // get current url for navigation through web application
  const parts = request.url.split('/');

  // delete method to remove current note
  if (parts.includes('delete')) { // -> localhost:8080/delete/42 -> parts[0] = localhost:8080 parts[1] = delete, parts[2] = 42

    // check if id is set and is a number
    if (parts.length == 3 && !isNaN(parts[2])) {
      model.delete(parts[2]).then(
          note => {
            redirect(response, '/');
          },
          error => send(response, error),
      );
    }

    // create new note
  } else if (parts.includes('new')) {
    send(response, getForm());

    // edit exiting note
  } else if (parts.includes('edit')) {
    // will display a web form for user interaction
    if (parts.length == 3 && !isNaN(parts[2])) {
      model.get(parts[2]).then(
          note => {
            console.log(note);
            send(response, getForm(note));
          },
          error => send(response, error),
      );
    }

    // save new note AND method is POST and not GET
  } else if (parts.includes('save') && request.method === 'POST') {

    // use formidable to handle incoming POST Request and Form Data https://www.npmjs.com/package/formidable
    const form = new formidable.IncomingForm();
    form.parse(request, (err, note, files) => {
      console.log('data', note);

      model.save(note).then(
          notes => {
            redirect(response, '/');
          },
          error => send(response, error),
      );
    });

    // standard response if images are in url, no special handling is needed, ...
  } else if (parts.includes('images')) {
    sendFile(response, request);

    // ... same for styles
  } else if (request.url === '/styles/style.css') {
    sendFile(response, request, 'utf8');

    // export data to file
  } else if (parts.includes('export')) {

      // load all data, only load selected data would also be possible
      model.getAll().then(
          notes => {
              ws = fs.createWriteStream("export.csv");

              const jsonData = JSON.parse(JSON.stringify(notes));
              console.log("jsonData", jsonData);

              ws.on('finish', function(){
                      console.log("finished");
                      sendFile(response, request, 'utf8', "/export.csv", true);
                  });

              fastcsv
                  .write(jsonData, { headers: true })
                  .on("finish", function() {
                      console.log("Write to export.csv successfully!");
                  })
                  .pipe(ws);
          },
          error => send(response, error),
      );

      // standard request case, show list view
  } else {
    model.getAll().then(
        notes => {
          send(response, getList(notes));
        },
        error => send(response, error),
    );
  }
});

// server is now listening to specific port
server.listen(8080, () =>
  console.log('Server and Notes Application is listening to https://localhost:8080'),
);
