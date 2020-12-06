function getForm(note, err) {
    console.log("getForm()");
    console.log(note);

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
        <link rel="stylesheet" href="styles/style.css" />
    </head>
    <body>
        <h1>${noteHeader}</h1>
        <form action="/save" method="POST">
            <p class="error">${err ? err : '' }</p>
            <input type="hidden" id="id" name="id" value="${note.id}" />
            <div>
                <label for="note">Note</label>
                <textarea type="text" id="note" name="note">${note.note ? note.note : '' }</textarea>
            </div>
            
            <button type="submit">save</button>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;
