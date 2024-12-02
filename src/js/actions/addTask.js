import projectList from "../classes/ProjectList.js";
import Task from "../classes/Task.js";
import { getDueDateMinMaxAttributes, refreshTaskList } from "../util/tasksDOM.js";
import {
  addDescInput,
  addDueDateInput,
  addPriorityInput,
  addTaskDialog,
  addTitleInput,
  generateNewId,
  variables,
} from "../util/common.js";

export function openAddTaskDialog() {
  resetInputValues();
  addTaskDialog.showModal();
}

export function getUserInput(e) {
  e.preventDefault();

  const title = addTitleInput.value.trim();
  const description = addDescInput.value.trim();
  const dueDate = addDueDateInput.value.trim();
  const priority = addPriorityInput.value.trim();

  if (!title.length) return;

  addTask(title, description, dueDate, priority);
}

export function addTask(
  title,
  description,
  dueDate,
  priority,
  status = false,
  id = generateNewId(),
) {
  const task = new Task();
  task.id = id;
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;
  task.isCompleted = status;

  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  project.addTask(task);

  refreshTaskList();
  resetInputValues();
  addTitleInput.focus();
}

function resetInputValues() {
  addTitleInput.value = "";
  addDescInput.value = "";
  addPriorityInput.selectedIndex = 0;
  setDueDateInputAttributes();
}

function setDueDateInputAttributes() {
  const attributes = getDueDateMinMaxAttributes();

  addDueDateInput.value = attributes.min;
  addDueDateInput.min = attributes.min;
  addDueDateInput.max = attributes.max;
}
