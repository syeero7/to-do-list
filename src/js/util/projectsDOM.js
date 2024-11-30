import { selectProject } from "../actions/selectProject.js";
import projectList from "../classes/ProjectList.js";
import { projectListElement, removeElements } from "./common.js";
import { createProjectElements } from "./createProjectEl.js";

function renderProjectList() {
  const fragment = createProjectElements(projectList.list);
  projectListElement.appendChild(fragment);
}

export function refreshProjectList() {
  removeElements(projectListElement);
  renderProjectList();
}

export function handleProjectListClicks() {
  projectListElement.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName !== "A" && target.tagName !== "BUTTON") return;
    const projectId = target.parentElement.dataset.projectId;

    if (target.tagName === "A") selectProject(projectId, target);
    //if(target.matches(".edit-btn"))
    // if(target.matches(".delete-btn"))
  });
}
