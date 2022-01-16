// in-memory data for demonstration
const data = [
    {id: 1, title: "User Story 1", description: "List Overview"},
    {id: 2, title: "User Story 2", description: "Search"},
    {id: 3, title: "User Story 3", description: "Detail View"},
    {id: 4, title: "User Story 4", description: "Edit existing Data"},
    {id: 5, title: "User Story 5", description: "Add new Data"}
];

function deleteTask(tasks, id ){
    const index = tasks.findIndex(task => task.id === parseInt(id, 10));
    if(index > -1){
        tasks.splice(index, 1);
    }
    return tasks;
}

function insert(task){
    // new task created
    const nextId = data.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
    task.id = nextId;
    data.push(task);
}

function update(task){
    // task already exists
    const index = data.findIndex( t => {
        return t.id === parseInt(task.id, 10);
    }); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    if(index > -1){
        task.id = parseInt(task.id, 10);
        data[index] = task;
    }
}

module.exports = {
    getAll(){
        return data;
    },
    get(id){
        return data.find(task => task.id === id);
    },
    delete(id){
        deleteTask(data, id);
    },
    save(task){
        task.id === '' ? insert(task) : update(task);
    }
};