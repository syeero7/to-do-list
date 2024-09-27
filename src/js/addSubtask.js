import lists from "./classes/lists";
import Subtask from "./classes/subtask";
import {
  subtaskDialog,
  addSubtaskForm,
  subtaskInput,
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

function addSubtask(subtaskId = null, subtaskName) {}
