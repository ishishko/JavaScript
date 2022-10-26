import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTasks } from "./readTasks.js";

export const addtask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if (value === "" || date === "") {
    return;
  }
  input.value = "";
  calendar.value = "";

  const complete = false;

  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  list.innerHTML = "";

  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  taskList.push(taskObj);
  localStorage.setItem("task", JSON.stringify(taskList));
  readTasks();
};

export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");
  const dateElement = document.createElement("span");
  const check = checkComplete(id);

  if (complete) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }
  task.classList.add("card");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));
  return task;
};
