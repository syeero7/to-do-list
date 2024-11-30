import projectList from "../classes/ProjectList.js";
import { refreshProjectList } from "../util/projectsDOM.js";
import {
  renameProjectDialog,
  renameProjectForm,
  renameProjectInput,
  variables,
} from "../util/common.js";

export function initRenameProjectForm() {
  renameProjectForm.addEventListener("submit", getProjectName);
  renameProjectForm.addEventListener("click", clickHandler);
}

export function openRenameProjectDialog(projectId) {
  variables.activeProjectId = projectId;
  setRenameProjectInputValue(projectId);
  renameProjectDialog.showModal();
}

function setRenameProjectInputValue(projectId) {
  const project = projectList.list.find((project) => project.id === projectId);
  renameProjectInput.value = project.name;
}

function getProjectName(e) {
  e.preventDefault();
  const input = renameProjectInput.value.trim();
  if (!input.length) return;
  updateProjectName(input);
}

function updateProjectName(input) {
  const project = projectList.list.find((project) => project.id === variables.activeProjectId);
  project.name = input;

  refreshProjectList();
  renameProjectDialog.close();
  variables.activeProjectId = null;
}

function clickHandler(e) {
  if (!e.target.matches(".cancel-btn")) return;

  renameProjectDialog.close();
  variables.activeProjectId = null;
}
