// required for FileSystem IOs
const fs = require('fs');

// deletes current note from temporary data source
function deleteNote(notes, id) {
  const index = notes.findIndex(note => note.id === parseInt(id));
  notes.splice(index, 1); // removes current data entry

  // store to JSON File
  saveToFile(notes);

  return notes;
}

// stores current not (new or changed) to temporary data source
function saveNote(notes, note) {
  if (note.id) {

    const index = notes.findIndex(nte => {
      return nte.id === parseInt(note.id);
    });

    note.id = parseInt(note.id);

    notes[index] = note;
  } else {

    // use previous detected highest number and current id, to get highest number and increase to next highest number
    // how 'reduce' works https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const nextId = notes.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
    note.id = nextId;
    notes.push(note);
  }

  // store to JSON File
  saveToFile(notes);

  return notes;
}

// will write current Notes to json file for persistence data
function saveToFile(notes){
  let data = JSON.stringify(notes);
  fs.writeFileSync('notes.json', data);
}

module.exports = {
  deleteNote,
  saveNote
}