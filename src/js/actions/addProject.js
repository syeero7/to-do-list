import projectList from "../classes/ProjectList.js";
import Project from "../classes/Project.js";
import { generateNewId, projectNameInput } from "../util/common.js";
import { refreshProjectList } from "../util/projectsDOM.js";

export function getProjectInput(e) {
  e.preventDefault();
  const projectName = projectNameInput.value.trim();
  if (!projectName.length) return;
  addProject(projectName);
}

export function addProject(name, id = generateNewId()) {
  const project = new Project();
  project.id = id;
  project.name = name;
  projectList.addProject(project);

  projectNameInput.value = "";
  refreshProjectList();
}
