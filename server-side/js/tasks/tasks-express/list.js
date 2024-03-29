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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${tasks.map(createRow).join('')}
                        </tr>
                    </tbody>
                </table>
                <a href="/new">add new Task</a>
            </body>
        </html>
    `;
}

function createRow(task){
    return `    
        <tr>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>
                <a href='/delete/${task.id}'>delete</a>
                <a href='/edit/${task.id}'>edit</a> 
            </td>
        </tr>
    `;
}

module.exports = getList;