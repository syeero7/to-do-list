import { myLists, editImage, deleteImage } from "./common";

export default function createListElements(toDoList) {
  const listItem = document.createElement("li");
  listItem.dataset.listId = toDoList.id;

  const para = document.createElement("p");
  para.textContent = toDoList.name;
  para.classList.add("listName");

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");

  const editImg = document.createElement("img");
  editImg.src = editImage;
  editImg.alt = "edit";

  editBtn.appendChild(editImg);
  listItem.append(para, editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");

  const deleteImg = document.createElement("img");
  deleteImg.src = deleteImage;
  deleteImg.alt = "delete";

  deleteBtn.appendChild(deleteImg);
  listItem.appendChild(deleteBtn);

  myLists.appendChild(listItem);
}
