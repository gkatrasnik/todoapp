import {projectsList} from "../index.js";
import {renderProjectsList} from "./dom.js";



function saveToStorage(projectsList) {
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    
}


function readFromStorage() {
    if(!localStorage.projectsList) {
        renderProjectsList(projectsList);
      }else {
        let storedData = JSON.parse(localStorage.getItem("projectsList"));
        projectsList = storedData;
        console.log(storedData)
        renderProjectsList(projectsList);
      }
      
}

export {saveToStorage, readFromStorage}