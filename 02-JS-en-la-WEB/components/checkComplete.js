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

export default check;
