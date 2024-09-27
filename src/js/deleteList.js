import lists from "./classes/lists";
import { refreshList } from "./myLists";
import { deleteListDialog, deleteListTitle } from "./common";

export default function deleteList(toDoListId) {
  renderDeleteListTitle(toDoListId);

  deleteListDialog.addEventListener("click", (e) => {
    const target = e.target;

    if (target.matches(".yesBtn")) {
      lists.deleteList(toDoListId);
      deleteListDialog.close();
      refreshList();
    }

    if (target.matches(".noBtn")) deleteListDialog.close();
  });

  deleteListDialog.showModal();
}

function renderDeleteListTitle(toDoListId) {
  const list = lists.getLists().find((list) => list.id == toDoListId);
  deleteListTitle.textContent = list.name;
}
