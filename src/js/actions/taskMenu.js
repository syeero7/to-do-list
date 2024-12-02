import { deleteTask } from "./deleteTask.js";
import { openEditTaskDialog } from "./editTask.js";

export function taskButtonClickHandler(e) {
  const target = e.target;
  if (!target.parentElement.matches(".dropdown-content")) return;
  const taskId = target.closest("li").dataset.taskId;

  //   if(target.matches(".drop-view-btn"))
  if (target.matches(".drop-edit-btn")) openEditTaskDialog(taskId);
  if (target.matches(".drop-delete-btn")) deleteTask(taskId);
}
