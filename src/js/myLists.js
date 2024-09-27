import lists from "../js/classes/lists";
import ToDoList from "../js/classes/toDoList";
import createListElements from "./createListEl";
import {
  removeElements,
  toDoListForm,
  myLists,
  listNameInput,
  generateNewId,
} from "./common";

export default () => {
  toDoListForm.addEventListener("submit", getUserInput);

  refreshList();
};

function renderLists() {
  lists.getLists().forEach((list) => createListElements(list));
}

function clearList() {
  removeElements(myLists);
}

function refreshList() {
  renderLists();
  clearList();
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
  refreshList()
}
