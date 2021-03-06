import { project, toDoFactory, selectProject } from "./modules/logic.js";
import {
  selectProjectDOM,
  closeModal,
  modalSubmitButton,
  addProjectText,
  projectSubmitButton,
  addTaskButton,
  allTasks,
  modalDiv,
  renderProjectsList,
  renderTasks,
  renderAllTasks,
  clearModal,
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
} from "./modules/dom.js";
import { readFromStorage, saveToStorage } from "./modules/storage.js";

// Global variables
let projectsList = [];
let currentProjectId;
let currentTaskId;

// add Event Listeners
closeModal.addEventListener("click", (e) => {
  modalDiv.style.display = "none";
});

editCloseModal.addEventListener("click", (e) => {
  editModalDiv.style.display = "none";
});

allTasks.addEventListener("click", (e) => {
  renderAllTasks();
});

modalSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalDiv.style.display = "none";

  let pIndex = projectsList.findIndex((x) => x.id === currentProjectId);
  let taskId = Date.now().toString();

  let task = toDoFactory(
    taskId,
    taskName.value,
    dueDate.value,
    finished.checked,
    description.value
  );
  projectsList[pIndex].addToDo(task);

  saveToStorage(projectsList);
  renderTasks(pIndex);
  clearModal();
});

editModalSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  editModalDiv.style.display = "none";

  //find indexes of edited project and task
  let pIndex = projectsList.findIndex((x) => x.id === currentProjectId);
  let tIndex = projectsList[pIndex]
    .showToDo()
    .findIndex((y) => y.id === currentTaskId);

  let task = toDoFactory(
    currentTaskId,
    editTaskName.value,
    editDueDate.value,
    editFinished.checked,
    editDescription.value
  );
  projectsList[pIndex].editToDo(tIndex, task);

  saveToStorage(projectsList);
  renderTasks(pIndex);
  clearModal();
});

projectSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let projectId = Date.now().toString();
  let newProject = project(projectId, addProjectText.value);
  projectsList.push(newProject);

  saveToStorage(projectsList);
  renderProjectsList(projectsList);
  addProjectText.value = "";

  //project Index -> index of this project ID
  let pIndex = projectsList.findIndex((x) => x.id === projectId);
});

projectSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let projectId = Date.now().toString();
  let newProject = project(projectId, addProjectText.value);
  projectsList.push(newProject);

  saveToStorage(projectsList);
  renderProjectsList(projectsList);
  addProjectText.value = "";

  //project Index -> index of this project ID
  let pIndex = projectsList.findIndex((x) => x.id === projectId);

  selectProject(projectId);
  selectProjectDOM(pIndex);
  renderTasks(pIndex);
});

addTaskButton.addEventListener("click", (e) => {
  modalDiv.style.display = "block";
});

readFromStorage();

export { projectsList, currentProjectId, currentTaskId };
