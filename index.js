import { handleCreateTodo } from "./scripts/addTask.js";
import { todos } from "./scripts/deteleTask.js";
import { addTaskBtn, filter, taskInputText, taskList } from "./scripts/elements.js";
import { createTaskElement } from "./scripts/taskActions.js";
import { validateInput } from "./scripts/utilities.js";

export const renderTodoList = () => {
  taskList.innerHTML = "";

  todos.forEach((todo) => {
    const newTask = createTaskElement(todo);
    taskList.appendChild(newTask);
  });
};

const renderFilteredTodoList = () => {
  const filter = document.getElementById("filter");
  const selectedValue = filter.value;
  taskList.innerHTML = "";

  if (selectedValue === "done") {
    renderTasksByStatus(true); 
  } else if (selectedValue === "undone") {
    renderTasksByStatus(false); 
  } else {
    renderTodoList(); 
  }
};

const renderTasksByStatus = (isDone) => {
  const filteredTodos = todos.filter(todo => todo.done === isDone);
  filteredTodos.forEach(todo => {
    const newTask = createTaskElement(todo);
    taskList.appendChild(newTask);
  });
};

addTaskBtn.addEventListener("click", handleCreateTodo);
taskInputText.addEventListener("input", validateInput);
filter.addEventListener("change", renderFilteredTodoList);
renderTodoList();
