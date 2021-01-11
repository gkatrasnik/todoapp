let projectsList = [{projectName: "gasper1"}]

function createProject(projectName) {

    return {
        projectName: projectName,
        getProjectName() {
            return projectName;
        }
    }
}

function addToProjectsList(project) {
    projectsList.push(project);
}

function logProjectsList() {
    console.log(projectsList);
} 

export {createProject, addToProjectsList, logProjectsList,projectsList};