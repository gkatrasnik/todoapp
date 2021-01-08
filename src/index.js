

// Define elements
const closeModal = document.querySelector("#close-modal");
const modalSubmitButton = document.querySelector("#modal-submit-button");
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
    console.log(e.target)
});

addTaskButton.addEventListener("click", (e) => {
    modalDiv.style.display = "block"
});