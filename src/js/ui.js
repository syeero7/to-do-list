import * as viewProjects from "./actions/viewProjects.js";
import { addProjectForm, projectsMenuBtn } from "./util/common.js";
import { getProjectInput } from "./actions/addProject.js";
import { handleProjectListClicks } from "./util/projectsDOM.js";

export function initApp() {
  projectsMenuBtn.addEventListener("click", viewProjects.clickHandler);
  addProjectForm.addEventListener("submit", getProjectInput);
  handleProjectListClicks();
}
