import lists from "./classes/lists";
import { intlFormatDistance, isEqual, isPast } from "date-fns";
import { createSubtaskElements } from "./createSubtaskEl";
import { saveToLocalStorage } from "./storeData";
import {
  viewTaskDialog,
  viewTaskTitle,
  viewTaskDesc,
  viewTaskDueDate,
  viewTaskPriority,
  viewTaskNote,
  viewTaskStatus,
  subtasks,
  selectedList,
  removeElements,
} from "./common";

export function showViewTaskDetailsDialog(listId, taskId) {
  setViewTaskTextContent(listId, taskId);
  addEventListenerToViewTaskDialog();
  addEventListenerToSubtasksList();
  viewTaskDialog.showModal();
}

function setViewTaskTextContent(listId, taskId) {
  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  if (task == null) return;

  viewTaskTitle.textContent = task.title;
  viewTaskDesc.textContent = task.description;
  viewTaskPriority.textContent = `Task priority is ${task.priority}`;
  viewTaskNote.textContent = task.note;
  viewTaskStatus.textContent = task.status
    ? "The task is completed"
    : "The task is incomplete";

  // today === dueDate
  const equalToDueDate = isEqual(
    new Date().toISOString().slice(0, 10),
    task.dueDate,
  );
  // dueDate <= today
  viewTaskDueDate.textContent =
    isPast(task.dueDate) && !equalToDueDate
      ? "Task is overdue"
      : `The task is due ${
          equalToDueDate
            ? "today"
            : intlFormatDistance(task.dueDate, new Date())
        }`;

  subtasks.dataset.taskId = task.id;
  refreshSubtaskList();
}

function addEventListenerToViewTaskDialog() {
  viewTaskDialog.addEventListener("click", (e) => {
    const target = e.target;

    if (target.matches(".closeBtn")) {
      viewTaskDialog.close();
    }

    if (target.matches(".subTaskBtn")) {
      console.log("");
    }
  });
}

function addEventListenerToSubtasksList() {
  subtasks.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox]")) {
      deleteSubtask(e.target.id);
    }
  });
}

function deleteSubtask(subtaskId) {
  const listId = selectedList.dataset.selectedListId;
  const taskId = subtasks.dataset.taskId;

  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);
  task.deleteSubtask(subtaskId);

  refreshSubtaskList();
  saveToLocalStorage();
}

function clearSubtasksList() {
  removeElements(subtasks);
}

function renderSubtasks() {
  const listId = selectedList.dataset.selectedListId;
  const taskId = subtasks.dataset.taskId;

  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);
  task.getSubtasks().forEach((subtask) => createSubtaskElements(subtask));
}

function refreshSubtaskList() {
  clearSubtasksList();
  renderSubtasks();
}
