let tasksArray = document.querySelectorAll(".task__instance");

for(let i = 0; i < tasksArray.length; i++) {
    tasksArray[i].onclick = function (event) {
        console.log(this)
        toggleTaskState(this);
    }
}

function switchTaskToActive(task) {
    task.classList.add("task__instance_completed");

    //Заменяем картинку состояния на соответствующую
    let image = task.firstElementChild.firstElementChild.firstElementChild;
    image.src = "/icons/checkbox_checked.svg";
}
function switchTaskToNonActive(task) {
    task.classList.remove("task__instance_completed");

    //Заменяем картинку состояния на соответствующую
    let image = task.firstElementChild.firstElementChild.firstElementChild;
    image.src = "/icons/checkbox_not_checked.svg";
}
function toggleTaskState(task) {
    if(task.classList.contains("task__instance_completed")) {
        switchTaskToNonActive(task);
    } else {
        switchTaskToActive(task);
    }
}