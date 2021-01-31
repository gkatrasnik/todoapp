import {projectsList, currentProjectId} from "../index.js";

//factories
const project = (id, name) => {
    let toDoItems = [];    
    
    const showToDo = () => {
        return toDoItems
    }
    
    const addToDo = (todopodatki) => {
        toDoItems.push(todopodatki)
    }

    const deleteToDo = (index) => {
        toDoItems.splice(index, 1);
    }

    const editToDo = (toDoIndex, newObject) => {
        toDoItems[toDoIndex] = newObject;
    }


    return {id, name, toDoItems, showToDo,addToDo, deleteToDo, editToDo}
}


const toDoFactory = (id, name, dueDate, finished, description) => {
    return {id, name, dueDate, finished, description} 
}

//delete project from projectsList
function deleteProjectfromProjectsList(index) {
    projectsList.splice(index,1);
}

//select clicked project
function selectProject(index) {
    currentProjectId = index;
}


export {project, toDoFactory, deleteProjectfromProjectsList, selectProject}