import lists from "./classes/lists";
import { myLists, selectedList, addTaskButton } from "./common";

export function selectList(toDoListId, targetElement) {
  myLists.querySelectorAll("p").forEach((para) => {
    para.classList.remove("selected");
  });
  targetElement.classList.add("selected");

  selectedList.dataset.selectedListId = toDoListId;
  resetSelectedList();
}

export function resetSelectedList() {
  addTaskButton.disabled = true;
  selectedList.textContent = "Please select a list";

  myLists.querySelectorAll("p").forEach((para) => {
    if (para.classList.contains("selected")) {
      const toDoListId = selectedList.dataset.selectedListId;

      addTaskButton.disabled = false;

      lists.getLists().find((list) => {
        if (list.id == toDoListId) {
          selectedList.textContent = list.name;
        }
      });
    }
  });
}
