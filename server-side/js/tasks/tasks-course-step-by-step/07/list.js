// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function getList(tasks){
    console.log("getList");
    console.log(tasks);
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Tasks - Aufgaben</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Tasks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${tasks.map(createRow).join('')}
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    `;
}

function createRow(task){
    return `    
        <tr>
            <td>${task.title}</td>
            <td>${task.description}</td>
        </tr>
    `;
}

module.exports = getList;