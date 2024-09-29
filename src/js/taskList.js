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
  clearToDoList();

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

    const task = target.closest("div[data-task-id]");

    if (task == null) return;

    const taskId = task.dataset.taskId;

    if (target.matches(".moreBtn")) {
      showButtons(target);
    }

    if (target.matches(".openBtn")) {
      showViewTaskDetailsDialog(listId, taskId);
    }

    if (target.matches(".addBtn")) {
      showAddSubtasksDialog(taskId);
    }

    if (target.matches(".editBtn")) {
      showEditTaskDialog(listId, taskId);
    }

    if (target.matches(".deleteBtn")) {
      deleteTask(listId, taskId);
    }
  });
}

function showButtons(target) {
  const sibling = target.nextElementSibling;

  sibling.classList.toggle("show");
  target.addEventListener("focusout", () => {
    setTimeout(() => {
      sibling.classList.remove("show");
    }, 250); //0.25 seconds
  });
}
