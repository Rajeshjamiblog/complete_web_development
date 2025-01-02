
const toDoInput = document.getElementById("todo-input");

const addTaskButton = document.getElementById("add-task-btn");

const toDoList = document.getElementById("todo-list");

let tasks = [];

addTaskButton.addEventListener("click", () => {
    const taskText = toDoInput.value.trim();    
    if (taskText === "") return;
    
    const newTask = {
        id : Date.now(),
        text : taskText,
        completed : false
    }

    tasks.push(newTask);
    toDoInput.value = ""; //clear input
    console.log(tasks);

})