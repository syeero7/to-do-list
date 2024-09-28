import lists from "./classes/lists";
import { saveToLocalStorage } from "./storeData";

export function updateTaskStatus(listId, taskId, target) {
  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  task.status = target.checked;

  saveToLocalStorage();

  target.checked
    ? target.closest("p").classList.add("completed")
    : target.closest("p").classList.remove("completed");
}
