function addTask(task){
    return {
        type: "task.add",
        data: {task}
    }
}

export {
    addTask
}