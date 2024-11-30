export default class Task {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #completed;

  constructor() {
    this.#id = null;
    this.#title = null;
    this.#description = null;
    this.#dueDate = null;
    this.#priority = null;
    this.#completed = false;
  }

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get title() {
    return this.#title;
  }
  set title(title) {
    this.#title = title;
  }

  get description() {
    return this.#description;
  }
  set description(desc) {
    this.#description = desc;
  }

  get dueDate() {
    return this.#dueDate;
  }
  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get priority() {
    return this.#priority;
  }
  set priority(priority) {
    this.#priority = priority;
  }

  get isCompleted() {
    return this.#completed;
  }
  set isCompleted(value) {
    this.#completed = value;
  }
}
