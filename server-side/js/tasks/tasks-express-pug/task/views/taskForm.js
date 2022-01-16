function render(task){

    const form = `
        <html>
            <head>
                <title>Task</title>
                <meta charset="utf-8">
            </head>
            <body>
                <form action="/task/save" method="POST">
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

module.exports = render;