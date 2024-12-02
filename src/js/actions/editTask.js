import projectList from "../classes/ProjectList.js";
import { getDueDateMinMaxAttributes, refreshTaskList } from "../util/tasksDOM.js";
import {
  editDescInput,
  editDueDateInput,
  editPriorityInput,
  editTaskDialog,
  editTitleInput,
  variables,
} from "../util/common.js";

export function openEditTaskDialog(taskId) {
  variables.activeTaskId = taskId;
  setEditTaskFormElementAttributeValues();

  editTaskDialog.showModal();
}

function setEditTaskFormElementAttributeValues() {
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  const task = project.tasks.find((task) => task.id == variables.activeTaskId);
  const dueDate = getDueDateMinMaxAttributes();

  editTitleInput.value = task.title;
  editDescInput.value = task.description;
  editDueDateInput.value = task.dueDate;
  editDueDateInput.min = dueDate.min;
  editDueDateInput.max = dueDate.max;
  editPriorityInput.value = task.priority;
}

export function getEditTaskInputs(e) {
  e.preventDefault();

  const title = editTitleInput.value.trim();
  const description = editDescInput.value.trim();
  const dueDate = editDueDateInput.value.trim();
  const priority = editPriorityInput.value.trim();

  setTaskEditedValues(title, description, dueDate, priority);
}

function setTaskEditedValues(title, description, dueDate, priority) {
  if (!title.length) return;
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  const task = project.tasks.find((task) => task.id == variables.activeTaskId);

  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;

  refreshTaskList();
  editTaskDialog.close();
  variables.activeTaskId = null;
}
