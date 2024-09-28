import lists from "./classes/lists";
import Subtask from "./classes/subtask";
import { refreshToDoList } from "./taskList";
import { saveToLocalStorage } from "./storeData";
import {
  subtaskDialog,
  addSubtaskForm,
  subtaskInput,
  selectedList,
  generateNewId,
} from "./common";

export function showAddSubtasksDialog(taskId) {
  addEventListenerToSubtaskForm();
  subtaskDialog.dataset.taskId = taskId;
  subtaskDialog.showModal();
}

function addEventListenerToSubtaskForm() {
  addSubtaskForm.addEventListener("submit", getUserInput);

  addSubtaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".closeBtn")) {
      subtaskDialog.close();
    }
  });
}

function getUserInput(e) {
  e.preventDefault();

  const subtaskName = subtaskInput.value.trim();
  if (!subtaskName.length) return;

  addSubtask(null, subtaskName);
}

export function addSubtask(subtaskId = null, subtaskName) {
  if (subtaskId === null) {
    subtaskId = generateNewId();
  }

  const listId = selectedList.dataset.selectedListId;
  const taskId = subtaskDialog.dataset.taskId;

  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  const newSubtask = new Subtask();
  newSubtask.id = subtaskId;
  newSubtask.name = subtaskName;

  task.addSubtask(newSubtask);

  subtaskInput.value = "";
  saveToLocalStorage();
  subtaskInput.focus();
  refreshToDoList();
}
