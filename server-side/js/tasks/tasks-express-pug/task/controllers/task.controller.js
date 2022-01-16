const model = require("../models/task.model");

// TODO integrate Database access to a complete example

function listAction(request, response) {
    const data = model.getAll();
    // take care about data object, this will be only matched within pug template if name is matching => "data"
    response.render("task-list", { data });
}

function formAction(request, response){
    let task = {id: "", title: "", description: ""};
    if(parseInt(request.params.id, 10) > 0){
        task = model.get(parseInt(request.params.id, 10));
    }
    // take care about data object, this will be only matched within pug template if name is matching => "task"
    response.render("task-form", { task });
}

function deleteAction(request, response) {
    const id = parseInt(request.params.id, 10);
    model.delete(id);
    response.redirect(request.baseUrl);
}

function saveAction(request, response){
    const task = {
        id : request.body.id,
        title : request.body.title,
        description : request.body.description
    }
    model.save(task);
    response.redirect(request.baseUrl);
}

module.exports = {
    listAction,
    formAction,
    deleteAction,
    saveAction
}