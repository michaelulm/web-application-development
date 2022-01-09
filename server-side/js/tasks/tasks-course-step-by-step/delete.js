

function deleteTask(tasks, id){
    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    const index = tasks.findIndex(task => task.id === parseInt(id, 10));
    if(index > -1)
        tasks.splice(index, 1);
    return tasks;
}

module.exports = deleteTask;