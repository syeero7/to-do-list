class ProjectList {
  #list;

  constructor() {
    this.#list = [];
  }

  addProject(project) {
    this.#list.push(project);
  }

  deleteProject(projectId) {
    const projects = this.#list;

    for (let i = 0; i < projects.length; i++) {
      if (projectId == projects[i].id) {
        this.#list.splice(i, 1);
        break;
      }
    }
  }

  get list() {
    return this.#list;
  }
}

const projectList = new ProjectList();
export default projectList;
