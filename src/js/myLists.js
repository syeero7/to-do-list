import lists from "../js/classes/lists";
import createListElements from "./createListEl";
import {
  removeElements,
  myLists,
} from "./common";

export default () => {
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
