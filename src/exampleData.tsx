export const exampleData = [
  {
    title: "Learn React",
    key: crypto.randomUUID(),
    todos: [
      {
        title: "Watch youtube tutorials",
        description: "Some description",
        dueDate: "21/02/2024",
        priority: "low",
        completed: false,
        overdue: false,
        key: crypto.randomUUID(),
      },
      {
        title: "Build some projects",
        description:
          "Some long descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        dueDate: "23/04/2024",
        priority: "med",
        completed: true,
        overdue: false,
        key: crypto.randomUUID(),
      },
    ],
  },
  {
    title: "Build a todo-list app",
    key: crypto.randomUUID(),
    todos: [
      {
        title: "Scaffold the UI",
        description: "Some description",
        dueDate: "19/01/2024",
        priority: "high",
        completed: true,
        overdue: false,
        key: crypto.randomUUID(),
      },
    ],
  },
];
