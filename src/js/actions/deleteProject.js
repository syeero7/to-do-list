import projectList from "../classes/ProjectList.js";
import { refreshProjectList } from "../util/projectsDOM.js";
import { deleteProjectDialog, deleteProjectHeader, variables } from "../util/common.js";

export function initDeleteProject() {
  deleteProjectDialog.querySelector(".btn-container").addEventListener("click", clickHandler);
}

export function openDeleteProjectDialog(projectId) {
  variables.activeProjectId = projectId;
  setDeleteProjectDialogHeader(projectId);
  deleteProjectDialog.showModal();
}

function clickHandler(e) {
  if (e.target.matches(".confirm-btn")) deleteProject();
  if (e.target.matches(".cancel-btn")) {
    variables.activeProjectId = null;
    deleteProjectDialog.close();
  }
}

function deleteProject() {
  projectList.deleteProject(variables.activeProjectId);
  variables.activeProjectId = null;
  deleteProjectDialog.close();
  refreshProjectList();
}

function setDeleteProjectDialogHeader(projectId) {
  const project = projectList.list.find((project) => project.id === projectId);
  deleteProjectHeader.textContent = project.name;
}
