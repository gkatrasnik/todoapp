import {projectsList} from "../index.js";
import { project,deleteProjectfromProjectsList, selectProject } from "./logic.js";


const closeModal = document.querySelector("#close-modal");
const modalSubmitButton = document.querySelector("#modal-submit-button");
const addProjectText = document.getElementById("newproject");
const projectSubmitButton = document.querySelector("#project-submit-button");
const addTaskButton = document.querySelector("#add-task-button");
const modalDiv = document.getElementById("modal");
const projectsListUl = document.getElementById("projects-list");


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
        deleteDiv.setAttribute("class","delete-project");
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

            let items = document.querySelectorAll('[data-index]');
            items.forEach((item) => {
                item.classList.remove("active-project")
            })
            items[i].setAttribute("class", "active-project")

        });
       
    }
}



export {closeModal, modalSubmitButton, addProjectText, projectSubmitButton, addTaskButton, modalDiv, projectsListUl,
        renderProjectsList
}