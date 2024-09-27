export default class ToDoList {
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

  set id(newId) {
    this.#id = newId;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  addTask(newTask) {
    this.#list.push(newTask);
  }

  deleteTask(taskId) {
    this.#list = this.#list.filter((task) => task.id != taskId);
  }

  getList() {
    return this.#list;
  }
}
