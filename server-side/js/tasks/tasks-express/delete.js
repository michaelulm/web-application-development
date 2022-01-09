function deleteTask(tasks, id ){
    const index = tasks.findIndex(task => task.id === parseInt(id, 10));
    if(index > -1){
        tasks.splice(index, 1);
    }
    return tasks;
}

module.exports = deleteTask;