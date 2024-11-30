import { projectListElement, selected } from "../util/common.js";

export function selectProject(projectId, targetElement) {
  projectListElement.querySelectorAll("li").forEach((listItem) => {
    listItem.classList.remove("selected");
  });
  targetElement.classList.add("selected");

  selected.projectId = projectId;
}
