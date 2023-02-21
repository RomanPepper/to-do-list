let tasksArray =  document.querySelectorAll(".task__instance");

for(let i = 0; i < tasksArray.length; i++) {
    tasksArray[i].addEventListener("swipe", moveSideButtonsToLeft);
}

function moveSideButtonsToLeft(taskElement) {
    let buttonsContainer = taskElement.lastElementChild;

    buttonsContainer.left = 0;
    taskElement.right = 40;
}

function moveSideButtonsBack(taskElement) {
    let buttonsContainer = taskElement.lastElementChild;

    buttonsContainer.left = 176;
    taskElement.right = 0;
}