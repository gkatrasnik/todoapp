

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

export {project, toDoFactory}