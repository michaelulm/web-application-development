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

// entry point for each Request to create matching response
const server = http.createServer((request, response) => {
    console.log("==================");
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

      var requiredFields = ['id', 'note'];
      console.log("requiredFields");
      console.log(requiredFields);

      var fields = [];
      // https://www.npmjs.com/package/formidable
      // check each field with specific validations
      console.log("before validation")
      form.on('field', function (name, value) {
          console.log(name + ": " + value);
          fields[name] = value;

          if (requiredFields.indexOf(name) > -1 && !value) {
              console.log("error at validation");
              // field is required and its value is empty
              form._error('Required field is empty!');
          }

          if(name == "note"){
              var regex = /^[a-zA-Z\s]+$/;
              if (regex.test(value) === false) {
                  console.log("error at regex")
                  // only text is allowed without any numbers
                  form._error('Only text allowed!');
              } else {
                  // nothing to do, valid field
                  console.log("valid regex");
              }
          }
      });
      console.log("after validation");

      form.parse(request, (err, note, files) => {
          console.log("parse form");
          var noteObj = Object.assign({}, fields);// temporary stored fields array to Object
          console.log(note);
          console.log(noteObj);
          console.log(err);

          if(err){
              // error handling after validation -> go back to form to show user validation information
              send(response, getForm(noteObj, err));
          } else {
              model.save(note).then(
                  notes => {
                      redirect(response, '/');
                  },
                  error => send(response, error),
              );
          }
      });

      // standard response if images are in url, no special handling is needed, ...
  } else if (parts.includes('images')) {
    sendFile(response, request);

    // ... same but little bit different for styles
  } else if (request.url.includes('/styles/')) {

    sendFile(response, request, 'utf8');

    // standard request case, show list view
  } else {
    model.getAll().then(
        notes => {
          send(response, getList(notes));
        },
        error => {
            // TODO handling different errors
            // TODO improve error handling by better helper methods

            // ER_NO_SUCH_TABLE
            if(error.errno == 1146){
                console.log("handling error")
                sendFile(response, {url:"/html/db-error-1146.html"}, 'utf8');
                // keep in mind, that this is only a demonstration for handling different errors
                // TODO think about useful error handlings, because a missing table should not show to users

            } else {
                console.log("something else happens");
                sendFile(response, {url:"/html/500.html"}, 'utf8');

            }

        },
    );
  }
});

// server is now listening to specific port
server.listen(8080, () =>
  console.log('Server and Notes Application is listening to http://localhost:8080'),
);
