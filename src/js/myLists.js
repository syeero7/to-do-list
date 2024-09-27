import createListElements from "./createListEl";
import deleteList from "./deleteList";
import lists from "../js/classes/lists";
import renameList from "./renameList";
import ToDoList from "../js/classes/toDoList";
import { selectList, resetSelectedList } from "./taskList";
import {
  generateNewId,
  listNameInput,
  myLists,
  removeElements,
  toDoListForm,
} from "./common";

export default function init() {
  toDoListForm.addEventListener("submit", getUserInput);
  addEventListenerToList();
  refreshList();
}

function renderLists() {
  lists.getLists().forEach((list) => createListElements(list));
}

function clearList() {
  removeElements(myLists);
}

export function refreshList() {
  clearList();
  renderLists();
  resetSelectedList();
}

function getUserInput(e) {
  e.preventDefault();
  const listName = listNameInput.value.trim();
  if (!listName.length) return;
  addToDoList(null, listName);
}

function addToDoList(listId = null, listName) {
  if (listId === null) {
    listId = generateNewId();
  }

  const toDoList = new ToDoList();
  toDoList.id = listId;
  toDoList.name = listName;
  lists.addList(toDoList);

  listNameInput.value = "";
  refreshList();
}

function addEventListenerToList() {
  myLists.addEventListener("click", (e) => {
    const target = e.target;
    const listId = target.parentElement.dataset.listId;

    if (target.matches(".editBtn")) {
      renameList(listId);
    }

    if (target.matches(".deleteBtn")) {
      deleteList(listId);
    }

    if (target.matches(".listName")) {
      selectList(listId, target);
    }
  });
}
