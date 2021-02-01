import {projectsList} from "../index.js";
import {renderAllTasks, renderProjectsList} from "./dom.js";
import {project} from "./logic.js";



function saveToStorage(projectsList) {
  localStorage.setItem("projectsList", JSON.stringify(projectsList));    
}


function readFromStorage() {
  if(!localStorage.projectsList) {
    renderProjectsList(projectsList);
    }else{
      let storedData = JSON.parse(localStorage.getItem("projectsList"));

      for (let i in storedData) {
        let newProject = project(storedData[i].id, storedData[i].name); 
        projectsList[i] = newProject;

        for (let g in storedData[i].toDoItems) {
          let newToDo = storedData[i].toDoItems[g];
          projectsList[i].addToDo(newToDo);
        }
      }


      console.log(projectsList)
      renderProjectsList(projectsList);
      renderAllTasks();
    }
      
}

export {saveToStorage, readFromStorage}