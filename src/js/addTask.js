import lists from "./classes/lists";
import Task from "./classes/task";
import { add, formatISO } from "date-fns";
import { refreshToDoList } from "./taskList";
import { saveToLocalStorage } from "./storeData";
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

export function showAddTaskDialog() {
  addTaskForm.addEventListener("submit", getUserInput);

  addTaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".closeBtn")) {
      addTaskDialog.close();
    }
  });

  resetInputValues();
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

export function addNewTask(
  id = null,
  title,
  description,
  dueDate,
  priority,
  note ,
  status = false,
) {
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
  newTask.status = status;

  const selectedListId = selectedList.dataset.selectedListId;

  const list = lists.getLists().find((list) => list.id == selectedListId);
  list.addTask(newTask);

  refreshToDoList();
  resetInputValues();
  saveToLocalStorage();
  taskTitleInput.focus();
}

function SetDueDateInputAttributes() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  taskDueDateInput.value = today;
  taskDueDateInput.min = today;
  taskDueDateInput.max = formatISO(add(now, { years: 10 }), {
    representation: "date", // 10 years from now in ISO format
  });
}

function resetInputValues() {
  taskTitleInput.value = "";
  taskDescInput.value = "";
  taskPrioritySelect.selectedIndex = 0;
  taskNoteInput.value = "";
  SetDueDateInputAttributes();
}
