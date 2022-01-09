function saveTask(tasks, task){

    console.log(tasks);
    console.log(task);
    // task already exists
    if(task.id){
        console.log("edit task");
        const index = tasks.findIndex( t => {
            return t.id === parseInt(task.id, 10);
        });

        if(index > -1) {
            task.id = parseInt(task.id, 10);
            tasks[index] = task;
        }
    }

    // add new task to existing task list
    else {
        console.log("new task");
        const nextId = tasks.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
        console.log(task);
        task.id = nextId;
        tasks.push(task);
    }

    return tasks;
}

module.exports = saveTask;