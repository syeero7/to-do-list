import { subtasks } from "./common";

export function createSubtaskElements(subtask) {
  const subtaskContainer = document.createElement("div");

  const label = document.createElement("label");
  label.htmlFor = subtask.id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = subtask.id;

  const span = document.createElement("span");
  span.textContent = subtask.name;

  label.append(input, span);
  subtaskContainer.appendChild(label);
  subtasks.appendChild(subtaskContainer);
}
