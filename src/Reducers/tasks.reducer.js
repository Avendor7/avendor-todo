const initState = {};

function taskReducer(state=initState, action){
    switch(action.type) {
        case "task.add":
            return state;
        default:
            return state;
    }
}

export default taskReducer;