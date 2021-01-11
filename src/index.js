//import {createProject, addToProjectsList, logProjectsList, projectsList} from "./modules/logic.js";;

// Define elements
let projectsList = [];


const closeModal = document.querySelector("#close-modal");
const modalSubmitButton = document.querySelector("#modal-submit-button");
const addProjectText = document.getElementById("newproject");
const projectSubmitButton = document.querySelector("#project-submit-button");
const addTaskButton = document.querySelector("#add-task-button");
const modalDiv = document.getElementById("modal");


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
    np = "";
    console.log(projectsList);
    
});

addTaskButton.addEventListener("click", (e) => {
    modalDiv.style.display = "block"
});


//factories

const project = (name) => {
    let toDoItems = []
    
    
    const showToDo = () => {
        return toDoItems
    }

    //tukaj dodaj funkcije, recimo za dodajanje todoja v projekt
    const addToDo = (todopodatki) => {
    //pač ti bos dodau object k ga bos naredu na podobn način k sm js spodaj naredu projekt, recimo let toDoItem = todo(name, duedate, smth, smth) in po toDoItems.push(toDoItem), pac nekak bo mogl vedit ker projekt je selectan, in taprauga najdit v projectList arrayu... seprau prek nekga indexa... zdej to deluje za zaćetek.
    toDoItems.push(todopodatki)
    }


    return {name, showToDo,addToDo}
}

const toDoFactory = (podatki) => {
    let duedate
    let finished

    // todo factory..., podobn kt gor pr projektu seprau usak todo item bo mu neke podatke, ki bodo shranjeni v ta factory....
    return { duedate, finished} 
}