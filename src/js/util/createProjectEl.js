export function createProjectElements(project, projectList) {
  const listItem = document.createElement("li");
  listItem.dataset.projectId = project.id;

  const link = document.createElement("a");
  link.textContent = project.name;
  link.href = "#";

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn", "btn-bg");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn", "btn-bg");

  listItem.append(link, editBtn, deleteBtn);
  projectList.appendChild(listItem);
}
