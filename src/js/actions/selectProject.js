import projectList from "../classes/ProjectList.js";
import { refreshTaskList } from "../util/tasksDOM.js";
import {
  addTaskBtn,
  projectListElement,
  removeElements,
  selectedProjectHeader,
  taskListElement,
  variables,
} from "../util/common.js";

export function selectProject(projectId, targetElement) {
  projectListElement.querySelectorAll("li").forEach((listItem) => {
    listItem.classList.remove("selected");
  });
  targetElement.parentElement.classList.add("selected");

  variables.selectedProjectId = projectId;
  resetSelectedList();
  refreshTaskList();
}

export function resetSelectedList() {
  addTaskBtn.disabled = true;
  selectedProjectHeader.textContent = "Please select a project";
  removeElements(taskListElement); // clear task list

  const hasSelected = [...projectListElement.querySelectorAll("li")].some((listItem) => {
    return listItem.classList.contains("selected");
  });

  if (!hasSelected) return;

  addTaskBtn.disabled = false;
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  selectedProjectHeader.textContent = project.name;
}
