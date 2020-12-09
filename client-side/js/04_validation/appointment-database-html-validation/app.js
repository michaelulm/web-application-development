//HTTP module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require("http");

// initialize model object
let model = require("./model"); // will export several functions, in this case a complete database model

// init helper module with some useful functions
const helper = require("./helper");
const send = helper.send;
const sendFile = helper.sendFile;
const redirect = helper.redirect;

// creates Overview List with HTML
const getList = require("./views/list");
const getForm = require("./views/form");

// load additional module formidable, A Node.js module for parsing form data
// more details at https://www.npmjs.com/package/formidable
const formidable = require('formidable');


// entry point for each Request to create matching response
//Any node web server application will at some point have to create a web server object. This is done by using [createServer]
const server = http.createServer((request, response) => {
   // get current url for navigation through web application
   const parts = request.url.split('/');

  if (request.url === "/styles/style.css") {
    sendFile(response, request, "utf8");

    // create new note
  } else if (parts.includes('new')) {
    send(response, getForm());

      // save new note AND method is POST and not GET
  } else if (parts.includes('save') && request.method === 'POST') {

    // use formidable to handle incoming POST Request and Form Data https://www.npmjs.com/package/formidable
    const form = new formidable.IncomingForm();
    form.parse(request, (err, milestones, files) => {
      console.log('data', milestones);

      model.save(milestones).then(
          milestones => {
            redirect(response, '/');
          },
          error => send(response, error),
      );
    });
    


    // standard request case, show list view
  } else {
    model.getAll().then(
      (milestone) => {
        send(response, getList(milestone));
      },
      //(error) => send(response, error)
      (error) =>  {
        send(response, getError(error));

      }
    ).catch(error => {
      console.error("error ", error);
    });
  }
});

// server is now listening to specific port
server.listen(8080, () =>
  console.log(
    "Server and Notes Application is listening to http://localhost:8080"
  )
);
