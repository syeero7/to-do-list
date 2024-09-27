export default class Task {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #note;
  #complete;
  #subtasks;

  constructor() {
    this.#id = null;
    this.#title = null;
    this.#description = null;
    this.#dueDate = null;
    this.#priority = null;
    this.#note = null;
    this.#complete = false;
    this.#subtasks = [];
  }

  set id(newId) {
    this.#id = newId;
  }

  get id() {
    return this.#id;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get title() {
    return this.#title;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get description() {
    return this.#description;
  }

  set dueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set priority(newPriority) {
    this.#priority = newPriority;
  }

  get priority() {
    return this.#priority;
  }

  set note(newNote) {
    this.#note = newNote;
  }

  get note() {
    return this.#note;
  }

  set status(newTaskStatus) {
    this.#complete = newTaskStatus;
  }

  get status() {
    return this.#complete;
  }

  addSubtask(subtask) {
    this.#subtasks.push(subtask);
  }

  deleteSubtask(subtaskId) {
    this.#subtasks = this.#subtasks.filter(
      (subtask) => subtask.id != subtaskId,
    );
  }

  getSubtasks() {
    return this.#subtasks;
  }
}
