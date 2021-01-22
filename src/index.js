import {project, toDoFactory, selectProject} from "./modules/logic.js";
import  {closeModal, modalSubmitButton, addProjectText, projectSubmitButton, addTaskButton, modalDiv, renderProjectsList, renderTasks, clearModal, taskName, dueDate, finished, description, editModalSubmitButton, editModalDiv,editCloseModal} from "./modules/dom.js";


// Global variables
let projectsList = [];
let currentProjectIndex;
let currentTask;

// add Event Listeners
closeModal.addEventListener("click", (e) => {
    modalDiv.style.display = "none"
});

editCloseModal.addEventListener("click", (e) => {
    editModalDiv.style.display = "none"
});



modalSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalDiv.style.display = "none"

    let task = toDoFactory(taskName.value, dueDate.value, finished.checked, description.value)
    projectsList[currentProjectIndex].addToDo(task);
    let g = projectsList[currentProjectIndex].showToDo() //console loging
    console.log(g)
    renderTasks(currentProjectIndex);
    clearModal();

});

editModalSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    editModalDiv.style.display = "none"

    renderTasks(currentProjectIndex);
    clearModal();

});

projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // tuki nrdis prek project factorya nov projekt z praznim toDoArrayem, funkcijo za pokazat toDoje, in po sm ti zgor še razložu kako naj bi dodajanje todojev zgledal :), v return daš kar hočeš da je public.

    let np = project(addProjectText.value);    
    console.log(np);
    projectsList.push(np);
    
    renderProjectsList(projectsList);
    addProjectText.value ="";

    //set currentObjectIndex to last added object
    let index = projectsList.length - 1;
    selectProject(index);
    
    
});

addTaskButton.addEventListener("click", (e) => {
    modalDiv.style.display = "block"
});

export {projectsList, currentProjectIndex, currentTask}