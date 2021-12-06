function getForm(tasks, id){

    // console outputs only needed for demonstration purpose,
    // to identify values through runtime -> use debug at development
    // could also be used within testing scenarios

    // console.log("getForm() entry point");
    // console.log(tasks);
    // console.log(id);

    // initialise task object -> needed for use case "add new task"
    let task = {
        id: '',
        title: '',
        description : ''
    }

    // if id is undefined it's not true
    if(id){
        task = tasks.find(task => task.id === parseInt(id, 10));
    }

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
                        <input type="text" id="title" name="title" value="${task.title}"/>
                    </div>    
                    <div>
                        <label for="title">Description</label>
                        <input type="text" id="description" name="description" value="${task.description}"/>
                    </div>    
                    <div>
                        <button type="submit">save</button>
                    </div>
                </form>
                
                <a href="/">back</a>
            </body>
        </html>
    `;

    return form;
}

module.exports = getForm;