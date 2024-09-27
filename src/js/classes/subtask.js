export default class Subtask {
  #id;
  #name;

  constructor() {
    this.#id = null;
    this.#name = null;
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
}
