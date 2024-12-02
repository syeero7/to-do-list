import projectList from "../classes/ProjectList.js";
import { getUserInput, openAddTaskDialog } from "../actions/addTask.js";
import { createTaskElements } from "./createTaskEl.js";
import { updateTaskStatus } from "../actions/taskStatus.js";
import { taskButtonClickHandler } from "../actions/taskMenu.js";
import { add, formatISO } from "date-fns";
import {
  addTaskBtn,
  addTaskDialog,
  addTaskForm,
  removeElements,
  taskListElement,
  variables,
} from "./common.js";

export function handleTasksEvents() {
  addTaskBtn.addEventListener("click", openAddTaskDialog);
  addTaskForm.addEventListener("submit", getUserInput);
  addTaskForm.addEventListener("click", (e) => {
    if (!e.target.matches(".close-btn")) return;
    addTaskDialog.close();
  });
  taskListElement.addEventListener("change", updateTaskStatus);
  taskListElement.addEventListener("click", taskButtonClickHandler);
}

function renderTasks() {
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  const fragment = createTaskElements(project.tasks);
  taskListElement.appendChild(fragment);
}

export function refreshTaskList() {
  removeElements(taskListElement);
  renderTasks();
}

export function getDueDateMinMaxAttributes() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const tenYearsFromNow = formatISO(add(now, { years: 10 }), { representation: "date" });

  return { min: today, max: tenYearsFromNow };
}
