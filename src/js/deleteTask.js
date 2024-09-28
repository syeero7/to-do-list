import lists from "./classes/lists";
import { saveToLocalStorage } from "./storeData";
import { refreshToDoList } from "./taskList";

export function deleteTask(listId, taskId) {
  const list = lists.getLists().find((list) => list.id == listId);
  list.deleteTask(taskId);

  refreshToDoList();
  saveToLocalStorage();
}
