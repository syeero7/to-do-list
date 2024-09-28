import { intlFormatDistance, isEqual } from "date-fns";
import {
  addImage,
  deleteImage,
  editImage,
  moreImage,
  openImage,
  tagImage,
  toDoList,
} from "./common";

export function createTaskElements(task) {
  const taskContainer = document.createElement("div");
  taskContainer.dataset.taskId = task.id;

  const para = document.createElement("p");
  para.dataset.taskPriority = task.priority;
  if (task.status) para.classList.add("completed");

  const label = document.createElement("label");
  label.htmlFor = task.id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = task.id;
  input.checked = task.status;

  const title = document.createElement("span");
  title.textContent = task.title;
  title.dataset.taskTitle = "";

  const dueDate = document.createElement("span");
  dueDate.classList.add("dueDate");

  // task.dueDate === today
  dueDate.textContent = isEqual(
    new Date().toISOString().slice(0, 10),
    task.dueDate,
  )
    ? "today"
    : intlFormatDistance(task.dueDate, new Date());
  //distance between task.dueDate and today

  const tagImg = document.createElement("img");
  tagImg.classList.add("tagImg");
  tagImg.src = tagImage;
  tagImg.alt = task.priority;

  const dropdownDiv = document.createElement("div");
  dropdownDiv.classList.add("dropdownMore");

  const moreBtn = document.createElement("button");
  moreBtn.classList.add("moreBtn");

  const moreImg = document.createElement("img");
  moreImg.src = moreImage;
  moreImg.alt = "more";

  const moreButtons = createDropdownButtons();

  label.append(input, title);
  para.append(label, dueDate, tagImg);
  moreBtn.appendChild(moreImg);
  dropdownDiv.append(moreBtn, moreButtons);
  taskContainer.append(para, dropdownDiv);
  toDoList.appendChild(taskContainer);
}

function createDropdownButtons() {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("btnContainer");

  const openBtn = document.createElement("button");
  openBtn.classList.add("openBtn");

  const openImg = document.createElement("img");
  openImg.src = openImage;
  openImg.alt = "open";

  const addBtn = document.createElement("button");
  addBtn.classList.add("addBtn");

  const addImg = document.createElement("img");
  addImg.src = addImage;
  addImg.alt = "add";

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");

  const editImg = document.createElement("img");
  editImg.src = editImage;
  editImg.alt = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");

  const deleteImg = document.createElement("img");
  deleteImg.src = deleteImage;
  deleteImg.alt = "delete";

  openBtn.appendChild(openImg);
  addBtn.appendChild(addImg);
  editBtn.appendChild(editImg);
  deleteBtn.appendChild(deleteImg);
  containerDiv.append(openBtn, addBtn, editBtn, deleteBtn);

  return containerDiv;
}
