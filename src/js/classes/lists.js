class Lists {
  #Lists;

  constructor() {
    if (Lists.instance == null) {
      this.#Lists = [];
      Lists.instance = this;
    }

    return Lists.instance;
  }

  addList(newList) {
    this.#Lists.push(newList);
  }

  deleteList(listId) {
    this.#Lists = this.#Lists.filter((list) => list.id != listId);
  }

  getLists() {
    return this.#Lists;
  }
}

const lists = new Lists();
Object.freeze(lists);
export default lists;
