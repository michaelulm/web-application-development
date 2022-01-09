// function getForm(tasks, id) {
//
//     // initialise task object
//     let task = {
//         id: '',
//         title: '',
//         description: ''
//     }
//
//     // TODO FALLBACK if wrong id is given
//     // try to find task if id is given
//     if (id) {
//         task = tasks.find(task => task.id === parseInt(id, 10))
//     }
//
//     return getForm(task);
//
// }

function getForm(task){

    // task object will now be needed within form

    const form = `
    
        <html>
            <head>
                <title>Task</title>
                <meta charset="utf-8">
            </head>
            <body>
                <form action="/save" method="POST">
                    <input type="hidden" id="id" name="id" value="${task.id}" />
                    <div>
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" value="${task.title}" />
                    </div>
                    <div>
                        <label for="description">Description</label>
                        <input type="text" id="description" name="description" value="${task.description}" />
                    </div>
                    <div>
                        <button type="submit">save</button>
                    </div>
                </form>
            </body>        
        </html>
    `;

    return form;
}

module.exports = getForm;