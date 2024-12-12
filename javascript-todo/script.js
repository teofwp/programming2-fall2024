let tasks = [];

function showTasks() {
    let taskListUl = document.getElementById("task-list");
    taskListUl.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        taskListUl.appendChild(li);
    }
}

function addTask() {
    let task = prompt("Enter your task: ");
    tasks.push(task);
    showTasks();
}

function clearTask() {
    tasks = [];
    showTasks();
}

function removeSpecific() {
    let taskToRemove = prompt("Enter the task to remove:");
    if (!taskToRemove) return;

    const taskIndex = tasks.indexOf(taskToRemove);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        showTasks();
        alert("Removed");
    } else {
        alert("Not found in list");
    }
}
