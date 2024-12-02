import projectList from "./classes/ProjectList.js";
import { addProject } from "./actions/addProject.js";
import { addTask } from "./actions/addTask.js";
import { removeElements, taskListElement, variables } from "./util/common.js";

export function saveToLocalStorage() {
  const data = projectList.list.map((project) => ({
    id: project.id,
    name: project.name,
    tasks: project.tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      isCompleted: task.isCompleted,
    })),
  }));

  localStorage.setItem("toDo_L1st", JSON.stringify(data));
}

export function loadFromLocalStorage() {
  const data = localStorage.getItem("toDo_L1st");
  if (!data || !data.length) return;

  JSON.parse(data).forEach((project) => {
    addProject(project.name, project.id);
    variables.selectedProjectId = project.id;
    project.tasks.forEach((task) => {
      addTask(task.title, task.description, task.dueDate, task.priority, task.isCompleted, task.id);
    });
  });

  removeElements(taskListElement);
}
