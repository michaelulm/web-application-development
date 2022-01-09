function saveTask(tasks, task){

    if(task.id){
        // task already exists
        const index = tasks.findIndex( t => {
            return t.id === parseInt(task.id, 10);
        }); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

        if(index > -1){
            task.id = parseInt(task.id, 10);
            tasks[index] = task;
        }

    } else {
        // new task created
        const nextId = tasks.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
        task.id = nextId;
        tasks.push(task);
    }

    return tasks;
}
module.exports = saveTask;