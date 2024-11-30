export default class Project {
  #id;
  #name;
  #list;

  constructor() {
    this.#id = null;
    this.#name = null;
    this.#list = [];
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  addTask(task) {
    this.#list.push(task);
  }

  deleteTask(taskId) {
    const tasks = this.#list;

    for (let i = 0; i < tasks.length; i++) {
      if (taskId == tasks[i].id) {
        this.#list.splice(i, 1);
        break;
      }
    }
  }

  get tasks() {
    return this.#list;
  }
}
