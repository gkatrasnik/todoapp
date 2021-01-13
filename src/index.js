import {project, toDoFactory} from "./modules/logic.js";
import  {closeModal, modalSubmitButton, addProjectText, projectSubmitButton, addTaskButton, modalDiv, projectsListUl, renderProjectsList} from "./modules/dom.js";


// Define elements
let projectsList = [];


// add Event Listeners
closeModal.addEventListener("click", (e) => {
    modalDiv.style.display = "none"
});

modalSubmitButton.addEventListener("click", (e) => {
    modalDiv.style.display = "none"
});

projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // tuki nrdis prek project factorya nov projekt z praznim toDoArrayem, funkcijo za pokazat toDoje, in po sm ti zgor še razložu kako naj bi dodajanje todojev zgledal :), v return daš kar hočeš da je public.

    let np = project(addProjectText.value);    
    console.log(np);
    projectsList.push(np);
    
    renderProjectsList(projectsList);
    np = "";
});

addTaskButton.addEventListener("click", (e) => {
    modalDiv.style.display = "block"
});

