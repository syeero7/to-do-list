import projectList from "../classes/ProjectList.js";
import { projectListElement, removeElements } from "./common.js";
import { createProjectElements } from "./createProjectEl.js";

function renderProjectList() {
  projectList.list.forEach((project) => createProjectElements(project, projectListElement));
}

export function refreshProjectList() {
  removeElements(projectListElement);
  renderProjectList();
}
