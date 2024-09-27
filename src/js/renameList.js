import lists from "./classes/lists";
import { refreshList } from "./myLists";
import { renameListDialog, renameListForm, renameListInput } from "./common";

export default (toDoListId) => {
  renameListForm.addEventListener("submit", updateListName);
  renameListForm.addEventListener("click", cancel);

  renameListDialog.dataset.renameListId = toDoListId;
  setRenameListInputValue(toDoListId);
  renameListDialog.showModal();
};

function setRenameListInputValue(toDoListId) {
  lists.getLists().find((list) => {
    if (list.id == toDoListId) renameListInput.value = list.name;
  });
}

function updateListName(e) {
  e.preventDefault();
  const toDoListId = renameListDialog.dataset.renameListId;
  const userInput = renameListInput.value.trim();
  if (!userInput.length) return;
  lists.getLists().find((list) => {
    if (list.id == toDoListId) {
      list.name = userInput;
    }
  });
  refreshList();
  renameListDialog.close();
  renameListDialog.dataset.renameListId = "";
}

function cancel(e) {
  if (e.target.matches(".cancelBtn")) {
    renameListDialog.close();
    renameListDialog.dataset.renameListId = "";
  }
}
