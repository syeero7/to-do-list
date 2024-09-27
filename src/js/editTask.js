import lists from "./classes/lists";
import { refreshToDoList } from "./taskList";
import {
  editTaskDialog,
  editTaskForm,
  editTaskTitleInput,
  editTaskDescInput,
  editTaskDueDateInput,
  editTaskPriority,
  editTaskNoteInput,
} from "./common";

export function showEditTaskDialog(listId, taskId) {
  setTaskInputValues(listId, taskId);
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
