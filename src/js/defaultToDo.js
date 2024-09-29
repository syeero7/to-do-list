export function setDefaultList() {
  const data = [
    {
      id: "1727647217425",
      name: "List x021",
      toDoList: [
        {
          id: "1727649061918",
          title: "make this look nice",
          description:
            "wow, this description looks great! It could use a few more words, though!",
          dueDate: "2025-12-31",
          priority: "important",
          note: "remove subtasks",
          complete: false,
          subtasks: [
            { id: "1727650392683", name: "stay cool" },
            { id: "1727650437619", name: "just delete this" },
          ],
        },
        {
          id: "1727649370829",
          title: "remember to breathe",
          description: "just breathe  it's really not that hard",
          dueDate: "2024-10-01",
          priority: "normal",
          note: "",
          complete: true,
          subtasks: [],
        },
      ],
    },
  ];

  const storeData = localStorage.getItem("t0D0_L1st");

  if (storeData == null) {
    localStorage.setItem("t0D0_L1st", JSON.stringify(data));
  }
}
