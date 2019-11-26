
// creates and returns complete overview page with HTML and CSS reference
function getList(notes) {

    console.log("getList")
    console.log(notes);

    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Notes Overview</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="/styles/style.css" />
        </head>
        <body>
            <h1>Notes Overview</h1>
            <table>
                <tr>
                <th>id</th><th>Note</th><th colspan="2">actions</th>
                </tr>
                
                ${notes.map(createRow).join('')}
                
            </table>
            <a href="/new"><img class="icon" src="/images/new.png" alt="new note" title="new note" /></a>
        </body>
    </html>`;
}

// how array map works https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// create each row with TR and TD Elements
function createRow(note) {

    return `<tr>
        <td>${note.id}</td>
        <td>${note.note}</td>
        <td><a href="/delete/${note.id}"><img class="icon" src="/images/delete.png" alt="delete note" title="delete note" /></a></td>
        <td><a href="/edit/${note.id}"><img class="icon" src="/images/edit.png" alt="edit note" title="edit note" /></a></td>
    </tr>`;
}

module.exports = getList;
