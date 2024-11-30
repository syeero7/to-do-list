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
