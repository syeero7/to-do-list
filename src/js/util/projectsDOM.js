import { openDeleteProjectDialog } from "../actions/deleteProject.js";
import { openRenameProjectDialog } from "../actions/renameProject.js";
import { resetSelectedList, selectProject } from "../actions/selectProject.js";
import { setOpenIfMobile } from "../actions/viewProjects.js";
import projectList from "../classes/ProjectList.js";
import { saveToLocalStorage } from "../localStorage.js";
import { projectListElement, removeElements } from "./common.js";
import { createProjectElements } from "./createProjectEl.js";

function renderProjectList() {
  const fragment = createProjectElements(projectList.list);
  projectListElement.appendChild(fragment);
}

export function refreshProjectList() {
  removeElements(projectListElement);
  renderProjectList();
  resetSelectedList();
  saveToLocalStorage();
}

export function handleProjectListClicks() {
  projectListElement.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName !== "A" && target.tagName !== "BUTTON") return;
    const projectId = target.parentElement.dataset.projectId;

    if (target.matches(".edit-btn")) openRenameProjectDialog(projectId);
    if (target.matches(".delete-btn")) openDeleteProjectDialog(projectId);
    if (target.tagName === "A") {
      e.preventDefault();
      selectProject(projectId, target);
      setOpenIfMobile(); // set value to open
    }
  });
}
