import projectList from "../classes/ProjectList.js";
import { getUserInput, openAddTaskDialog } from "../actions/addTask.js";
import { createTaskElements } from "./createTaskEl.js";
import { updateTaskStatus } from "../actions/taskStatus.js";
import { taskButtonClickHandler } from "../actions/taskMenu.js";
import { getEditTaskInputs } from "../actions/editTask.js";
import { add, formatISO } from "date-fns";
import {
  addTaskBtn,
  addTaskDialog,
  addTaskForm,
  editTaskDialog,
  editTaskForm,
  removeElements,
  taskListElement,
  variables,
  viewTaskDialog,
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
  editTaskForm.addEventListener("submit", getEditTaskInputs);
  editTaskForm.addEventListener("click", (e) => {
    if (!e.target.matches(".cancel-btn")) return;
    editTaskDialog.close();
  });
  viewTaskDialog.addEventListener("click", (e) => {
    if (!e.target.matches(".close-btn")) return;
    viewTaskDialog.close();
    variables.activeTaskId = null;
  });
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
