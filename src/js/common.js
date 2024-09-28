export const renameListDialog = document.querySelector("#renameListDlg");
export const deleteListDialog = document.querySelector("#deleteListDlg");
export const addTaskDialog = document.querySelector("#addTaskDlg");
export const editTaskDialog = document.querySelector("#editTaskDlg");
export const viewTaskDialog = document.querySelector("#viewTaskDlg");
export const subtaskDialog = document.querySelector("#subtaskDlg");

export const toDoListForm = document.querySelector("#toDoListForm");
export const listNameInput = document.querySelector("#addToDoList");

export const renameListForm = document.querySelector("#renameListForm");
export const renameListInput = document.querySelector("#renameList");

export const deleteListTitle = document.querySelector(".deleteListTitle");

export const addTaskForm = document.querySelector("#addTaskForm");
export const taskTitleInput = document.querySelector("#taskTitle");
export const taskDescInput = document.querySelector("#taskDescription");
export const taskDueDateInput = document.querySelector("#taskDueDate");
export const taskPrioritySelect = document.querySelector("#taskPriority");
export const taskNoteInput = document.querySelector("#taskNote");

export const editTaskForm = document.querySelector("#editTaskForm");
export const editTaskTitleInput = document.querySelector("#editTaskTitle");
export const editTaskDescInput = document.querySelector("#editTaskDescription");
export const editTaskDueDateInput = document.querySelector("#editTaskDueDate");
export const editTaskPriority = document.querySelector("#editTaskPriority");
export const editTaskNoteInput = document.querySelector("#editTaskNote");

export const addSubtaskForm = document.querySelector("#addSubtaskForm");
export const subtaskInput = document.querySelector("#addSubtask");

export const viewTaskTitle = document.querySelector("[data-task-title]");
export const viewTaskDesc = document.querySelector("[data-task-description]");
export const viewTaskDueDate = document.querySelector("[data-task-due-date]");
export const viewTaskPriority = document.querySelector("[data-task-priority]");
export const viewTaskNote = document.querySelector("[data-task-note]");
export const viewTaskStatus = document.querySelector("[data-task-status]");

export const myLists = document.querySelector("#myLists");
export const toDoList = document.querySelector("#toDoList");
export const subtasks = document.querySelector("#subtasks");

export const selectedList = document.querySelector("#selectedList");
export const addTaskButton = document.querySelector(".addTaskContainer>button");

export { default as addImage } from "../images/add.svg";
export { default as cancelImage } from "../images/cancel.svg";
export { default as checkImage } from "../images/check.svg";
export { default as closeImage } from "../images/close.svg";
export { default as deleteImage } from "../images/delete.svg";
export { default as editImage } from "../images/edit.svg";
export { default as moreImage } from "../images/more.svg";
export { default as openImage } from "../images/open.svg";
export { default as tagImage } from "../images/tag.svg";

export function generateNewId() {
  return Date.now().toString();
}

export function removeElements(parentElement) {
  while (parentElement.firstChild) {
    parentElement.firstChild.remove();
  }
}
