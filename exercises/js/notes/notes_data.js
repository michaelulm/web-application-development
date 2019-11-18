// required for FileSystem IOs
const fs = require('fs');

// synchronous reading = blocking
let rawdata = fs.readFileSync('notes.json');
console.log(rawdata);
let notes = JSON.parse(rawdata);
console.log(notes);
module.exports = notes;

// asynchronous reading = non-blocking
// fs.readFile('notes.json', (err, data) => {
//   if (err) throw err;
//   let notes = JSON.parse(data);
//   console.log(notes);
// });
// console.log('This is after the read call');