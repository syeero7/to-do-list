import lists from "./classes/lists";
import { addToDoList } from "./myLists";
import { addNewTask } from "./addTask";
import { addSubtask } from "./addSubtask";
import { selectedList } from "./common";
import { subtaskDialog } from "./common";

export function saveToLocalStorage() {
  const data = lists.getLists().map((list) => ({
    id: list.id,
    name: list.name,
    toDoList: list.getList().map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      note: task.note,
      complete: task.status,
      subtasks: task.getSubtasks().map((subtask) => ({
        id: subtask.id,
        name: subtask.name,
      })),
    })),
  }));

  localStorage.setItem("t0D0_L1st", JSON.stringify(data));
}

export function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("t0D0_L1st");

  if (typeof storedData !== "string") return;

  JSON.parse(storedData).forEach((list) => {
    addToDoList(list.id, list.name);

    selectedList.dataset.selectedListId = list.id;

    list.toDoList.forEach((task) => {
      addNewTask(
        task.id,
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.note,
        task.complete,
      );

      subtaskDialog.dataset.taskId = task.id;

      task.subtasks.forEach((subtask) => {
        addSubtask(subtask.id, subtask.name);
      });
    });
  });
}
