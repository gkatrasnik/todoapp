import {projectsList} from "../index.js";
import { project } from "./logic.js";


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
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(projectNames[i])); 
        projectsListUl.appendChild(li);
       
    }
}

export {closeModal, modalSubmitButton, addProjectText, projectSubmitButton, addTaskButton, modalDiv, projectsListUl,
        renderProjectsList
}