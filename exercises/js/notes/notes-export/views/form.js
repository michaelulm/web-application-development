function getForm(note) {

    if(note == undefined){
        note = {
            id: '',
            note: ''
        };
    }

    // define different header(s)
    let noteHeader = "Add new note";

    // check if note alredy exists and fill note object
    if (note.id) {
        // note = notes.find(nte => nte.id === parseInt(id));
        noteHeader = "Edit note";
    }

    // build form within javascript
    const form = `<!DOCTYPE html>
<html>
    <head>
        <title>${noteHeader}</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>${noteHeader}</h1>
        <form action="/save" method="POST">
            <input type="hidden" id="id" name="id" value="${note.id}" />
            <div>
                <label for="note">Note</label>
                <textarea type="text" id="note" name="note">${note.note}</textarea>
            </div>
            
            <button type="submit">save</button>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;
