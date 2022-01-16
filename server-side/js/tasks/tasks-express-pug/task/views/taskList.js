// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// function getList(tasks){
function render(request, tasks){
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Tasks - Aufgaben</title>
                <meta charset="utf-8">
                <link rel="stylesheet" href="/styles/style.css" />
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
                        ${tasks.map(function(task){return createRow(request, task)}).join("")}
                    </tbody>
                </table>
                <a href="/task/new"><img class="icon" src="/images/new.png"> add new Task</a>
            </body>
        </html>
    `;
}

function createRow(request, task){
    return `    
        <tr>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>
                <a href='${request.baseUrl}/delete/${task.id}'><img class="icon" src="/images/delete.png"></a>
                <a href='${request.baseUrl}/${task.id}'><img class="icon" src="/images/edit.png"></a> 
            </td>
        </tr>
    `;
}

module.exports = render;