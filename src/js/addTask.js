import lists from "./classes/lists";
import Task from "./classes/task";
import {
  addTaskForm,
  addTaskDialog,
  taskTitleInput,
  taskDescInput,
  taskDueDateInput,
  taskPrioritySelect,
  taskNoteInput,
} from "./common";

export function showAddTaskDialog() {
  addTaskForm.addEventListener("submit", getUserInput);

  addTaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".closeBtn")) {
      addTaskDialog.close();
    }
  });

  addTaskDialog.showModal();
}

function getUserInput(e) {
  e.preventDefault();

  const taskTitle = taskTitleInput.value.trim();
  const taskDescription = taskDescInput.value.trim();
  const taskDueDate = taskDueDateInput.value.trim();
  const taskPriority = taskPrioritySelect.value.trim();
  const taskNote = taskNoteInput.value.trim();

  if (!taskTitle.length) return;

}
