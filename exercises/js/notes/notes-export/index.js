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

// load additional module fast-csv, a Node.js module for exporting stored data to CSV
const fastcsv = require("fast-csv");
const fs = require("fs");

// load additional module pdfkit, a Node.js to create PDF Files
var PDFDocument = require('pdfkit');


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

              // CSV export with https://www.npmjs.com/package/fast-csv
              if (parts.includes('csv') ){

                  // create writeStream for streaming data into file
                  ws = fs.createWriteStream("export.csv");
                  ws.on('finish', function () {
                      console.log("finished");
                      sendFile(response, request, 'utf8', "export.csv", true);
                  });

                  // create json for fastcsv module
                  const jsonData = JSON.parse(JSON.stringify(notes));
                  console.log("jsonData", jsonData);

                  // creates csv file
                  fastcsv
                      .write(jsonData, {headers: true})
                      .on("finish", function () {
                          console.log("Write to export.csv successfully!");
                      })
                      .pipe(ws);

              // PDF export with https://www.npmjs.com/package/pdfkit
              } else if (parts.includes("pdf")){

                  ws = fs.createWriteStream("export.pdf");

                  // for Getting Started details at http://pdfkit.org/docs/getting_started.html
                  var pdf = new PDFDocument({
                      size: 'A4', // See other page sizes here: https://github.com/devongovett/pdfkit/blob/d95b826475dd325fb29ef007a9c1bf7a527e9808/lib/page.coffee#L69
                      info: {
                          Title: 'Notes Export',
                          Author: 'Michael Ulm',
                      }
                  });

                  // Write into PDF
                  pdf.fontSize(25).text('Notes list:');
                  pdf.fontSize(12).text('Exported List of Notes for demonstration of creating PDF Document.');

                  // Set the font size
                  pdf.fontSize(18);

                  // create for each note a new bullet point
                  notes.forEach(function(row) {
                      console.log(row);
                      pdf.list([row.note]);     // https://github.com/foliojs/pdfkit/issues/582
                  });

                  // Stream contents to PDF file
                  pdf
                      .on('finish', function () {
                         console.log("Write to export.pdf successfully!");
                      })
                      .pipe(ws);

                  // write to http response
                  pdf.pipe(response);

                  // close pdf document
                  pdf.end();

              // no matching export currently redirect to main page
              } else {
                  redirect(response, '/');
              }
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
