// deletes current note from temporary data source
function deleteNote(notes, id) {
  const index = notes.findIndex(note => note.id === parseInt(id));
  notes.splice(index, 1); // removes current data entry
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
  return notes;
}

module.exports = {
  deleteNote,
  saveNote
}