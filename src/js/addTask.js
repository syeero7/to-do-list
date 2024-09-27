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
  generateNewId,
  selectedList,
} from "./common";
import { refreshToDoList } from "./taskList";

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

  addNewTask(
    null,
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
    taskNote,
  );
}

function addNewTask(id = null, title, description, dueDate, priority, note) {
  if (id === null) {
    id = generateNewId();
  }

  const newTask = new Task();
  newTask.id = id;
  newTask.title = title;
  newTask.description = description;
  newTask.dueDate = dueDate;
  newTask.priority = priority;
  newTask.note = note;

  const selectedListId = selectedList.dataset.selectedListId;

  const list = lists.getLists().find((list) => list.id == selectedListId);
  list.addTask(newTask);

  refreshToDoList();
  taskTitleInput.focus();
}