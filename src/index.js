document.addEventListener("DOMContentLoaded", () => {
  
  const newForm = document.getElementById("create-task-form");
  const newDescription = document.getElementById("new-task-description");
 

  const myTasks = document.getElementById("tasks");


  newForm.addEventListener("submit", createNewToDo);
});

const createNewToDo = event => {
  event.preventDefault();
  const newDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};
const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};