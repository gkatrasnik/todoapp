import {projectsList, currentProjectIndex, currentTask} from "../index.js";
import {project, deleteProjectfromProjectsList, selectProject } from "./logic.js";




const addProjectText = document.getElementById("newproject");
const projectSubmitButton = document.querySelector("#project-submit-button");
const addTaskButton = document.querySelector("#add-task-button");
const projectsListUl = document.getElementById("projects-list");
const todosContent = document.getElementById("todos");

// modal elements
const closeModal = document.querySelector("#close-modal");
const modalSubmitButton = document.querySelector("#modal-submit-button");
const modalDiv = document.getElementById("modal");

const taskName = document.getElementById("name");
const dueDate = document.getElementById("due-date");
const finished = document.getElementById("finished");
const description = document.getElementById("description");

//edit modal elements
const editCloseModal = document.querySelector("#edit-close-modal");
const editModalSubmitButton = document.querySelector("#edit-modal-submit-button");
const editModalDiv = document.getElementById("edit-modal");

const editTaskName = document.getElementById("edit-name");
const editDueDate = document.getElementById("edit-due-date");
const editFinished = document.getElementById("edit-finished");
const editDescription = document.getElementById("edit-description");


function renderProjectsList(arrayOfProjects) {
    let projectNames;
    projectsListUl.innerHTML ="";

    projectNames = arrayOfProjects.map(a => a.name);
    console.log(projectNames)

    for (let i in projectNames) {
        const li = document.createElement("li");
        li.setAttribute("data-index", i);
        
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
        });

        // select project in DOM and in set global variable currentProjectIndex
        li.addEventListener("click", (e) => {
            selectProject(i);
            renderTasks(currentProjectIndex);

            let items = document.querySelectorAll('[data-index]');
            items.forEach((item) => {
                item.classList.remove("active-project")
            })
            items[i].setAttribute("class", "active-project")

        });
       
    }
}

function renderTasks(index) {
    todosContent.innerHTML = "";

    let currentProject = projectsList[index];
    let todos = projectsList[index].showToDo();
    
    for (let i in todos) {

        let todoDiv = document.createElement("div");
        todoDiv.setAttribute("class", "todo");

        
        todoDiv.textContent = todos[i]["name"] + " Due Date: " + todos[i]["dueDate"] + " Finished: " +  todos[i]["finished"]  + " Description: " + todos[i]["description"]; // sets todoDiv text content 

        let todoControls = document.createElement("div");
        todoControls.setAttribute("class", "todo-controls");
        
        let deleteTodo = document.createElement("div");
        deleteTodo.setAttribute("class","delete-item");
        deleteTodo.textContent = "X";

        let editTodo = document.createElement("div");
        editTodo.setAttribute("class", "edit-todo");
        editTodo.textContent="Edit"

        todosContent.appendChild(todoDiv);
        todoControls.appendChild(editTodo);
        todoControls.appendChild(deleteTodo);
        todoDiv.appendChild(todoControls);

        //delete todo
        deleteTodo.addEventListener("click", (e) => {
            todoDiv.parentNode.removeChild(todoDiv);
            currentProject.deleteToDo(i);
        });

        //edit todo               ---------------------------------------------------------------------------------------------------------------------------------
        editTodo.addEventListener("click", (e) => {
            currentTask =  projectsList[currentProjectIndex]; // use it 
            console.log(currentTask)

            editModalDiv.style.display = "block";

            editTaskName.value = todos[i]["name"]
            editDueDate.value = todos[i]["dueDate"]
            editFinished.checked = todos[i]["finished"]
            editDescription.value = todos[i]["description"]

        });

        //select todo
        todoDiv.addEventListener("click", (e) => {
            for  (i in currentProject) {
                
            }
        })
    }

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
        modalDiv,
        taskName,
        dueDate,
        finished,
        description,

        editModalSubmitButton,
        editModalDiv,
        editCloseModal,

        renderProjectsList,
        renderTasks,
        clearModal
}