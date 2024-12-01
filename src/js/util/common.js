export const variables = { selectedProjectId: null, activeProjectId: null, activeTaskId: null };

// selectors --------------------

export const renameProjectDialog = document.querySelector(".rename-project");
export const deleteProjectDialog = document.querySelector(".delete-project");
export const addTaskDialog = document.querySelector(".add-task");
export const editTaskDialog = document.querySelector(".edit-task");
export const viewTaskDialog = document.querySelector(".view-task");

export const addProjectForm = document.querySelector(".add-project-form");
export const projectNameInput = document.querySelector("#addProject");

export const renameProjectForm = document.querySelector(".rename-project-form");
export const renameProjectInput = document.querySelector("#renameProject");

export const deleteProjectHeader = document.querySelector(".delete-project-title");

export const addTaskForm = document.querySelector(".add-task-form");
export const addTitleInput = document.querySelector("#addTitle");
export const addDescInput = document.querySelector("#addDescription");
export const addDueDateInput = document.querySelector("#addDueDate");
export const addPriorityInput = document.querySelector("#addPriority");

export const editTaskForm = document.querySelector(".edit-task-form");
export const editTitleInput = document.querySelector("#editTitle");
export const editDescInput = document.querySelector("#editDescription");
export const editDueDateInput = document.querySelector("#editDueDate");
export const editPriorityInput = document.querySelector("#editPriority");

export const viewTitle = document.querySelector("[data-task-title]");
export const viewDesc = document.querySelector("[data-task-description]");
export const viewDueDate = document.querySelector("[data-task-due-date]");
export const viewPriority = document.querySelector("[data-task-priority]");
export const viewStatus = document.querySelector("[data-task-status]");

export const projectsMenuBtn = document.querySelector("button[data-projects]");
export const projectListSection = document.querySelector(".projects");
export const projectSection = document.querySelector(".todo-list");

export const selectedProjectHeader = document.querySelector(".selected-project");
export const addTaskBtn = document.querySelector(".todo-list>header .add-task-btn");
export const projectListElement = document.querySelector(".project-list");
export const taskListElement = document.querySelector(".task-list");

// functions -------------------

export function generateNewId() {
  return Date.now().toString();
}

export function removeElements(parentElement) {
  while (parentElement.firstChild) {
    parentElement.firstChild.remove();
  }
}
