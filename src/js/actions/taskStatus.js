import projectList from "../classes/ProjectList.js";
import { variables } from "../util/common.js";

export function updateTaskStatus(e) {
  const target = e.target;
  if (target.type !== "checkbox") return;
  const taskId = target.closest("li").dataset.taskId;
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  const task = project.tasks.find((task) => task.id == taskId);
  task.isCompleted = target.checked;

  target.checked
    ? target.parentElement.classList.add("completed")
    : target.parentElement.classList.remove("completed");
}
