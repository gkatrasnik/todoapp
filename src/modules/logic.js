import {projectsList, currentProjectIndex, currentTaskId} from "../index.js";

//factories

const project = (id, name) => {
    let toDoItems = [];    
    
    const showToDo = () => {
        return toDoItems
    }

    //tukaj dodaj funkcije, recimo za dodajanje todoja v projekt
    const addToDo = (todopodatki) => {
    //pač ti bos dodau object k ga bos naredu na podobn način k sm js spodaj naredu projekt, recimo let toDoItem = todo(name, duedate, smth, smth) in po toDoItems.push(toDoItem), pac nekak bo mogl vedit ker projekt je selectan, in taprauga najdit v projectList arrayu... seprau prek nekga indexa... zdej to deluje za zaćetek.
    toDoItems.push(todopodatki)
    }

    const deleteToDo = (index) => {
        toDoItems.splice(index, 1);
    }

    return {id, name, showToDo,addToDo, deleteToDo}
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
    currentProjectIndex = index;
   // console.log("selected project index: ", currentProjectIndex)
}

function editTask(project,task) { //-------------------------edit task function (use id)

    let editedTask = projectsList[project][task]
    console.log(project, task)

    //editTaskName = todos[i]["name"]
    //editDueDate = todos[i]["dueDate"]
    //editFinished = todos[i]["finished"]
    //editDescription = todos[i]["description"]
}

export {project, toDoFactory, deleteProjectfromProjectsList, selectProject, editTask}