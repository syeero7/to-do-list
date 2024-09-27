import lists from "./classes/lists";
import { createTaskElements } from "./createTaskEl";
import { showAddTaskDialog } from "./addTask";
import {
  myLists,
  selectedList,
  addTaskButton,
  removeElements,
  toDoList,
} from "./common";

export function selectList(toDoListId, targetElement) {
  myLists.querySelectorAll("p").forEach((para) => {
    para.classList.remove("selected");
  });
  targetElement.classList.add("selected");

  selectedList.dataset.selectedListId = toDoListId;
  addTaskButton.addEventListener("click", showAddTaskDialog);
  resetSelectedList();
  refreshToDoList();
}

export function resetSelectedList() {
  addTaskButton.disabled = true;
  selectedList.textContent = "Please select a list";

  myLists.querySelectorAll("p").forEach((para) => {
    if (para.classList.contains("selected")) {
      const toDoListId = selectedList.dataset.selectedListId;

      addTaskButton.disabled = false;

      const list = lists.getLists().find((list) => list.id == toDoListId);
      selectedList.textContent = list.name;
    }
  });
}

function renderTasks() {
  const toDoListId = selectedList.dataset.selectedListId;

  const list = lists.getLists().find((list) => list.id == toDoListId);
  list.getList().forEach((task) => createTaskElements(task));
}

function clearToDoList() {
  removeElements(toDoList);
}

export function refreshToDoList() {
  clearToDoList();
  renderTasks();
}
