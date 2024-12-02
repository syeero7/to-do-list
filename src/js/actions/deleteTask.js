import projectList from "../classes/ProjectList.js";
import { variables } from "../util/common.js";
import { refreshTaskList } from "../util/tasksDOM.js";

export function deleteTask(taskId) {
  const project = projectList.list.find((project) => project.id == variables.selectedProjectId);
  project.deleteTask(taskId);

  refreshTaskList();
}
