import lists from "./classes/lists";
import { refreshList } from "./myLists";
import { renameListDialog, renameListForm, renameListInput } from "./common";
import { saveToLocalStorage } from "./storeData";

export default (toDoListId) => {
  renameListForm.addEventListener("submit", updateListName);
  renameListForm.addEventListener("click", cancel);

  renameListDialog.dataset.renameListId = toDoListId;
  setRenameListInputValue(toDoListId);
  renameListDialog.showModal();
};

function setRenameListInputValue(toDoListId) {
  const list = lists.getLists().find((list) => list.id == toDoListId);
  renameListInput.value = list.name;
}

function updateListName(e) {
  e.preventDefault();
  const toDoListId = renameListDialog.dataset.renameListId;
  const userInput = renameListInput.value.trim();
  if (!userInput.length) return;

  const list = lists.getLists().find((list) => list.id == toDoListId);
  list.name = userInput;

  refreshList();
  renameListDialog.close();
  saveToLocalStorage();
  renameListDialog.dataset.renameListId = "";
}

function cancel(e) {
  if (e.target.matches(".cancelBtn")) {
    renameListDialog.close();
    renameListDialog.dataset.renameListId = "";
  }
}
