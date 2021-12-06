// TODO create Form for new AND edit task item
function getForm(tasks, id){

    const form = `
        <html>
            <head>
                <title>Task</title>
                <meta charset="utf-8">
            </head>
            <body>
                <form>
                    <div>
                        <label for="title">Title</label>
                        <input type="text" id="id" name="id" value=""/>
                    </div>    
                </form>
                
                <a href="/">back</a>
            </body>
        </html>
    `;

    return form;
}

module.exports = getForm;