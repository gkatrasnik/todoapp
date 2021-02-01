import {projectsList, currentProjectId, currentTaskId} from "../index.js";
import {deleteProjectfromProjectsList, selectProject } from "./logic.js";
import {saveToStorage } from "./storage.js";


const addProjectText = document.getElementById("newproject");
const projectSubmitButton = document.querySelector("#project-submit-button");
const addTaskButton = document.querySelector("#add-task-button");
const projectsListUl = document.getElementById("projects-list");
const todosContent = document.getElementById("todos");
const allTasks = document.getElementById("all-tasks");

// modal elements
const closeModal = document.querySelector("#close-modal");
const modalSubmitButton = document.querySelector("#modal-submit-button");
const modalDiv = document.getElementById("modal");

const taskName = document.getElementById("name");
const dueDate = document.getElementById("due-date");
const finished = document.getElementById("finished");
const description = document.getElementById("description");

//edit modal elements
const editTaskTitle = document.getElementById("edit-task-title");
const editCloseModal = document.querySelector("#edit-close-modal");
const editModalSubmitButton = document.querySelector("#edit-modal-submit-button");
const editModalDiv = document.getElementById("edit-modal");

const editTaskName = document.getElementById("edit-name");
const editDueDate = document.getElementById("edit-due-date");
const editFinished = document.getElementById("edit-finished");
const editDescription = document.getElementById("edit-description");


function renderProjectsList(arrayOfProjects) {
    let projectNames;
    let projectIds;
    projectsListUl.innerHTML ="";

    projectNames = arrayOfProjects.map(a => a.name);
    projectIds = arrayOfProjects.map(b => b.id);

    for (let i in projectNames) {
        const li = document.createElement("li");
        li.setAttribute("data-index", projectIds[i]);
        
        const contentDiv = document.createElement("div")
        contentDiv.setAttribute("class", "projects-list-item")

        const textDiv = document.createElement("div")
        textDiv.textContent = projectNames[i];
        contentDiv.appendChild(textDiv);

        const deleteDiv = document.createElement("div");
        deleteDiv.setAttribute("class","delete-item");
        deleteDiv.textContent = "X";
        contentDiv.appendChild(deleteDiv);     

        li.appendChild(contentDiv);
        projectsListUl.appendChild(li);
        
        //delete project from dom, call delete project from projectsList function from logic.js
        deleteDiv.addEventListener("click", (e) => { 
            li.parentNode.removeChild(li);
            deleteProjectfromProjectsList(i);       
            saveToStorage(projectsList);     
        });

        // select project in DOM and in set global variable currentProjectId
        li.addEventListener("click", (e) => {
                     
            selectProject(e.target.parentNode.dataset.index);
            let pIndex = projectsList.findIndex(x => x.id === currentProjectId);

            selectProjectDOM(pIndex);
            
            renderTasks(pIndex);

        });
       
    }
}

function selectProjectDOM(projectIndex) {
    let items = document.querySelectorAll('[data-index]');
    items.forEach((item) => {
        item.classList.remove("active-project");
    });
    items[projectIndex].setAttribute("class", "active-project");
}


// MAKE IT WORK --master project?
function renderAllTasks() {
    todosContent.innerHTML = "";

   let allTasksArray = [] 

    for (let project in projectsList) {
        for (let item in projectsList[project].toDoItems) {
            allTasksArray.push(projectsList[project].toDoItems[item]) 

        }

    }
    console.log(allTasksArray)

    for (let task in allTasksArray) {
        createTaskDemo(task, allTasksArray);
     }
}


function createTaskDemo(task, todos) {
    let todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "todo");
    todoDiv.setAttribute("data-id", todos[task]["id"])
    
    let taskCaption = todos[task]["name"]
    let taskCaptionUC = taskCaption.toUpperCase()
    
    todoDiv.textContent = `${taskCaptionUC}, Due Date: ${todos[task]["dueDate"]}`; // sets todoDiv text content  
    todosContent.appendChild(todoDiv);
}


function renderTasks(index) {
    todosContent.innerHTML = "";
    let toDoList = projectsList[index].showToDo();
    
    for (let toDo in toDoList) {
       createTask(toDo, toDoList);
    }
}

function createTask(task, todos) {
    let todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "todo");
    todoDiv.setAttribute("data-id", todos[task]["id"])

    let taskCaption = todos[task]["name"]
    let taskCaptionUC = taskCaption.toUpperCase()
    
    todoDiv.textContent = `${taskCaptionUC}, Due Date: ${todos[task]["dueDate"]}`; // sets todoDiv text content 

    let todoControls = document.createElement("div");
    todoControls.setAttribute("class", "todo-controls");
    
    let deleteTodo = document.createElement("div");
    deleteTodo.setAttribute("class","delete-item");
    deleteTodo.textContent = "X";

    let editTodo = document.createElement("div");
    editTodo.setAttribute("class", "edit-todo");
    editTodo.textContent="See/Edit"

    todosContent.appendChild(todoDiv);
    todoControls.appendChild(editTodo);
    todoControls.appendChild(deleteTodo);
    todoDiv.appendChild(todoControls);

    //delete todo
    deleteTodo.addEventListener("click", (e) => {

        currentTaskId = e.target.parentNode.parentNode.dataset.id //curent taskDiv
        let pIndex = projectsList.findIndex(x => x.id === currentProjectId);
        let tIndex = projectsList[pIndex].showToDo().findIndex(y => y.id === currentTaskId);

        projectsList[pIndex].deleteToDo(tIndex);

        todoDiv.parentNode.removeChild(todoDiv);
        saveToStorage(projectsList);  
    });

   //edit todo
   editTodo.addEventListener("click", (e) => {
            
    currentTaskId = e.target.parentNode.parentNode.dataset.id //curent taskDiv being edited
    console.log(`curent project ${currentProjectId} curent task id ${currentTaskId}`)
    editModalDiv.style.display = "block";

    editTaskTitle.textContent =todos[task]["name"]
    editTaskName.value = todos[task]["name"]
    editDueDate.value = todos[task]["dueDate"]
    editFinished.checked = todos[task]["finished"]
    editDescription.value = todos[task]["description"]

    });
}

function clearModal () {
    taskName.value = "";
    dueDate.value = "";
    finished.checked = false;
    description.value = "";
}

export {        
    addProjectText,
    projectSubmitButton,
    addTaskButton,
    modalSubmitButton,
    closeModal,
    projectsListUl,
    allTasks,
    modalDiv,
    taskName,
    dueDate,
    finished,
    description,

    editModalSubmitButton,
    editModalDiv,
    editCloseModal,
    editTaskName,
    editDueDate,
    editFinished,
    editDescription,

    renderProjectsList,
    renderTasks,
    renderAllTasks,
    clearModal,
    selectProjectDOM
}