import lists from "./classes/lists";
import { refreshToDoList } from "./taskList";
import { add, formatISO } from "date-fns";
import {
  editTaskDialog,
  editTaskForm,
  editTaskTitleInput,
  editTaskDescInput,
  editTaskDueDateInput,
  editTaskPriority,
  editTaskNoteInput,
  selectedList,
} from "./common";

export function showEditTaskDialog(listId, taskId) {
  setTaskInputValues(listId, taskId);
  addEventListenerToEditTaskForm();
  setEditTaskDueDateInputAttributes()

  editTaskDialog.dataset.taskId = taskId;

  editTaskDialog.showModal();
}

function setTaskInputValues(listId, taskId) {
  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  editTaskTitleInput.value = task.title;
  editTaskDescInput.value = task.description;
  editTaskDueDateInput.value = task.dueDate;
  editTaskPriority.value = task.priority;
  editTaskNoteInput.value = task.note;
}

function addEventListenerToEditTaskForm() {
  editTaskForm.addEventListener("submit", updateTaskDetails);

  editTaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".cancelBtn")) {
      editTaskDialog.close();
    }
  });
}

function updateTaskDetails(e) {
  e.preventDefault();

  const listId = selectedList.dataset.selectedListId;
  const taskId = editTaskDialog.dataset.taskId;

  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  const titleValue = editTaskTitleInput.value.trim();
  if (!titleValue.length) return;

  task.title = titleValue;
  task.description = editTaskDescInput.value.trim();
  task.dueDate = editTaskDueDateInput.value.trim();
  task.priority = editTaskPriority.value.trim();
  task.note = editTaskNoteInput.value.trim();

  refreshToDoList();
  editTaskDialog.close();
}

function setEditTaskDueDateInputAttributes() {
  const now = new Date();

  editTaskDueDateInput.min = now.toISOString().slice(0, 10);
  editTaskDueDateInput.max = formatISO(add(now, { years: 10 }), {
    representation: "date", // 10 years from today in ISO format
  });
}
