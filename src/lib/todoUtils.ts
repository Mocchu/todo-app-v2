export function createEmptyTodo() {
  return {
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    completed: false,
    overdue: false,
    key: crypto.randomUUID(),
  };
}
