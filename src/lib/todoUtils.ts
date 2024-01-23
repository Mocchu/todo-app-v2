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

export function convertDateObject(dateObject) {
  if (!dateObject) return "";

  const [day, month, year] = dateObject.split("/").map(Number);
  return new Date(year, month - 1, day);
}
