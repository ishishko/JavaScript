import check from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
(() => {
  const btn = document.querySelector("[data-form-btn]");

  const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";

    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(check());
    taskContent.appendChild(titleTask);
    //taskContent.appendChild(deleteIcon());
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    // task.innerHTML = content;
    list.appendChild(task);
  };

  btn.addEventListener("click", createTask);
})();
