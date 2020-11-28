// required for FileSystem IOs
const fs = require('fs');
const fsPromises = fs.promises;

// get all notes
function getAll() {
    return new Promise((resolve, reject) => {
    // asynchronous reading = non-blocking
        fs.readFile('notes.json', (error, data) => {
            if (error) {
                console.log(error);
                return reject(error);
            }else {
                let notes = JSON.parse(data);
                console.log(notes);
                resolve(notes);
            }
        });
    });
}

// stores current not (new or changed) to temporary data source
async function saveNote(notes, note) {

    // return new Promise((resolve, reject) => {
    console.log(notes);

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
    try {
        await fsPromises.writeFile("notes.json", JSON.stringify(notes));
    } catch (error) {
        console.error(error);
    }
}

// deletes current note from temporary data source
async function deleteNote(notes, id) {
    const index = notes.findIndex(note => note.id === parseInt(id));
    notes.splice(index, 1); // removes current data entry

    // store to JSON File
    try {
        await fsPromises.writeFile("notes.json", JSON.stringify(notes));
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAll,
    deleteNote,
    saveNote
};
