import lists from "./classes/lists";

export function updateTaskStatus(listId, taskId, target) {
  const list = lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);
  task.status = target.checked;

  target.checked
    ? target.closest("p").classList.add("completed")
    : target.closest("p").classList.remove("completed");
}
