import lists from "./classes/lists";
import { intlFormatDistance, isEqual, isPast } from "date-fns";
import {
  viewTaskDialog,
  viewTaskTitle,
  viewTaskDesc,
  viewTaskDueDate,
  viewTaskPriority,
  viewTaskNote,
  viewTaskStatus,
  subtasks,
} from "./common";

export function showViewTaskDetailsDialog(listId, taskId) {
  setViewTaskTextContent(listId, taskId);
  viewTaskDialog.showModal();
}

function setViewTaskTextContent(listId, taskId) {
  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

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
}
