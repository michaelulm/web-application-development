const model = require("../models/task.model");
const viewTaskList = require("../views/taskList");
const viewTaskForm = require("../views/taskForm");

function listAction(request, response) {
    const data = model.getAll();
    const view = viewTaskList(request, data);
    response.send(view);
}

function formAction(request, response){
    let task = {id: "", title: "", description: ""};
    if(request.params.id){
        task = model.get(parseInt(request.params.id, 10));
    }
    console.log(task);
    const view = viewTaskForm(task);
    response.send(view);
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