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
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;
    task.appendChild(taskContent);
    // task.innerHTML = content;
    list.appendChild(task);
  };

  btn.addEventListener("click", createTask);

  const check = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (e) => {
    e.target.classList.toggle("fas");
    e.target.classList.toggle("far");
    e.target.classList.toggle("completeIcon");
  };
})();
