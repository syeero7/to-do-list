import projectList from "../classes/ProjectList.js";
import { intlFormatDistance, isEqual, isPast } from "date-fns";
import {
  variables,
  viewDesc,
  viewDueDate,
  viewPriority,
  viewStatus,
  viewTaskDialog,
  viewTitle,
} from "../util/common.js";

export function openViewTaskDialog(taskId) {
  variables.activeTaskId = taskId;
  updateViewTaskDialogTextContent();
  viewTaskDialog.showModal();
}

function updateViewTaskDialogTextContent() {
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  const task = project.tasks.find((task) => task.id == variables.activeTaskId);

  viewTitle.textContent = task.title;
  viewDesc.textContent = task.description;
  viewDueDate.textContent = getDueDateTextContent(task.dueDate, new Date());
  viewPriority.textContent = task.priority;
  viewStatus.textContent = task.isComplete ? "task is completed" : "task is incomplete";
}

function getDueDateTextContent(dueDate, newDate) {
  const isDueDateToday = isEqual(newDate.toISOString().slice(0, 10), dueDate);
  const taskDueDate = isDueDateToday ? "today" : intlFormatDistance(dueDate, newDate);
  const isTaskOverdue = isPast(dueDate) && !isDueDateToday;
  const textContent = isTaskOverdue ? "task is overdue" : `task is due ${taskDueDate}`;

  return textContent;
}
