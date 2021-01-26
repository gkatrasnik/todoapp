import {project, toDoFactory, selectProject} from "./modules/logic.js";
import  {selectProjectDOM, closeModal, modalSubmitButton, addProjectText, projectSubmitButton, addTaskButton, modalDiv, renderProjectsList, renderTasks, clearModal, taskName, dueDate, finished, description, editModalSubmitButton, editModalDiv,editCloseModal, editTaskName, editDueDate, editFinished, editDescription} from "./modules/dom.js";


// Global variables
let projectsList = [];
let currentProjectId;
let currentTaskId;


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

    let pIndex = projectsList.findIndex(x => x.id === currentProjectId);
    let taskId = Date.now().toString();

    let task = toDoFactory(taskId, taskName.value, dueDate.value, finished.checked, description.value)
    projectsList[pIndex].addToDo(task);
    
    renderTasks(pIndex);
    clearModal();


});

editModalSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    editModalDiv.style.display = "none"

    //find indexes of edited project and task
    let pIndex = projectsList.findIndex(x => x.id === currentProjectId);
    let tIndex = projectsList[pIndex].showToDo().findIndex(y => y.id === currentTaskId);

    let task = toDoFactory(currentTaskId, editTaskName.value, editDueDate.value, editFinished.checked, editDescription.value)
    projectsList[pIndex].editToDo(tIndex, task)

    renderTasks(pIndex);
    clearModal();

    //editTask(pIndex, tIndex);

});

projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // tuki nrdis prek project factorya nov projekt z praznim toDoArrayem, funkcijo za pokazat toDoje, in po sm ti zgor še razložu kako naj bi dodajanje todojev zgledal :), v return daš kar hočeš da je public.
    let projectId = Date.now().toString(); // ADD P
    let np = project(projectId, addProjectText.value);    
    console.log(np);
    projectsList.push(np);
    
    renderProjectsList(projectsList);
    addProjectText.value ="";

    //set currentObjectIndex to last added object
    let pIndex = projectsList.findIndex(x => x.id === projectId);  

    selectProject(projectId);
    selectProjectDOM(pIndex);
    
    
});

addTaskButton.addEventListener("click", (e) => {
    modalDiv.style.display = "block";
    console.log("current project: " + currentProjectId)
});

export {projectsList, currentProjectId, currentTaskId}