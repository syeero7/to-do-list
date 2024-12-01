import projectList from "../classes/ProjectList.js";
import Task from "../classes/Task.js";
import { add, formatISO } from "date-fns";
import {
  addDescInput,
  addDueDateInput,
  addPriorityInput,
  addTaskDialog,
  addTitleInput,
  generateNewId,
  variables,
} from "../util/common.js";
import { refreshTaskList } from "../util/tasksDOM.js";

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

function addTask(title, description, dueDate, priority, status = false, id = generateNewId()) {
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
  addPriorityInput.selectIndex = 0;
  setDueDateInputAttributes();
}

function setDueDateInputAttributes() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const tenYearsFromNow = formatISO(add(now, { years: 10 }), { representation: "date" });

  addDueDateInput.value = today;
  addDueDateInput.min = today;
  addDueDateInput.max = tenYearsFromNow;
}
