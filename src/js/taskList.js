import lists from "./classes/lists";
import { createTaskElements } from "./createTaskEl";
import { showAddTaskDialog } from "./addTask";
import { updateTaskStatus } from "./taskStatus";
import { deleteTask } from "./deleteTask";
import { showEditTaskDialog } from "./editTask";
import { showViewTaskDetailsDialog } from "./viewTask";
import { showAddSubtasksDialog } from "./addSubtask";
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
  addEventListenerToToDoList();
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

function addEventListenerToToDoList() {
  const listId = selectedList.dataset.selectedListId;

  toDoList.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox]")) {
      updateTaskStatus(listId, e.target.id, e.target);
    }
  });

  toDoList.addEventListener("click", (e) => {
    const target = e.target;
    const taskId = target.closest("li[data-task-id]").dataset.taskId;

    const handleClick = {
      ".moreBtn": () => console.log(target),
      ".openBtn": () => showViewTaskDetailsDialog(listId, taskId),
      ".addBtn": () => showAddSubtasksDialog(taskId),
      ".editBtn": () => showEditTaskDialog(listId, taskId),
      ".deleteBtn": () => deleteTask(listId, taskId),
    };

    const targetSelector = Object.keys(handleClick).some((selector) =>
      target.matches(selector),
    ); // checks if the target element has any css selectors that match the keys in the handleClick object

    if (targetSelector) {
      handleClick[
        Object.keys(handleClick).find((selector) => target.matches(selector))
      ](); // invokes the corresponding value ( function ) if a match is found
    }
  });
}
