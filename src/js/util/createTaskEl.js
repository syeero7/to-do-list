import { intlFormatDistance, isEqual } from "date-fns";

export function createTaskElements(project) {
  const fragment = document.createDocumentFragment();

  project.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.dataset.taskId = task.id;

    const label = document.createElement("label");
    if (task.isCompleted) label.classList.add("completed");
    label.dataset.priority = task.priority.toLowerCase();
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = task.isCompleted;
    const text = document.createTextNode(task.title);

    const span = document.createElement("span");
    span.ariaLabel = "due date";
    span.classList.add("due-date");
    // task.dueDate === today
    span.textContent = isEqual(new Date().toISOString().slice(0, 10), task.dueDate)
      ? "today"
      : intlFormatDistance(task.dueDate, new Date());
    //distance between task.dueDate and today

    const div = document.createElement("div");
    div.classList.add("dropdown-container");
    const button = document.createElement("button");
    button.classList.add("more-btn", "btn-bg");
    button.ariaLabel = "task options";
    const article = createDropdownButtons();

    label.append(input, text);
    div.append(button, article);
    listItem.append(label, span, div);
    fragment.appendChild(listItem);
  });

  return fragment;
}

function createDropdownButtons() {
  const article = document.createElement("article");
  article.classList.add("dropdown-content");

  const viewBtn = document.createElement("button");
  viewBtn.classList.add("drop-view-btn");
  viewBtn.textContent = "View";

  const editBtn = document.createElement("button");
  editBtn.classList.add("drop-edit-btn");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("drop-delete-btn");
  deleteBtn.textContent = "Delete";

  article.append(viewBtn, editBtn, deleteBtn);
  return article;
}
