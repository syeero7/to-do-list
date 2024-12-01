import { viewProjectsClickHandler } from "./actions/viewProjects.js";
import { addProjectForm, projectsMenuBtn } from "./util/common.js";
import { getProjectInput } from "./actions/addProject.js";
import { handleProjectListClicks } from "./util/projectsDOM.js";
import { initRenameProjectForm } from "./actions/renameProject.js";
import { initDeleteProject } from "./actions/deleteProject.js";
import { handleTasksEvents } from "./util/tasksDOM.js";

export function initApp() {
  // adding event listeners
  projectsMenuBtn.addEventListener("click", viewProjectsClickHandler);
  addProjectForm.addEventListener("submit", getProjectInput);
  handleProjectListClicks();
  initRenameProjectForm();
  initDeleteProject();
  handleTasksEvents();
}
