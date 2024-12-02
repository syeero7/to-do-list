export function setDefaultProject() {
  const data = [
    {
      id: "1733114048486",
      name: "personal",
      tasks: [
        {
          id: "1733114088917",
          title: "idle for a while",
          description: "",
          dueDate: "2024-12-02",
          priority: "important",
          isCompleted: true,
        },
        {
          id: "1733114407692",
          title: "make a todo list",
          description: "make a todo list and then immediately forget what’s on it",
          dueDate: "2024-12-02",
          priority: "normal",
          isCompleted: true,
        },
      ],
    },
  ];

  const storedData = localStorage.getItem("toDo_L1st");

  if (!storedData) localStorage.setItem("toDo_L1st", JSON.stringify(data));
}
