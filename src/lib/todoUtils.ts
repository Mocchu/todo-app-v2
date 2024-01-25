import { isBefore } from "date-fns";

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

export function setOverdue(projectSetter) {
  projectSetter((currentProjects) => {
    const updatedProjects = currentProjects.map((project) => {
      return {
        ...project,
        todos: project.todos.map((todo) => {
          if (
            isBefore(convertToDateObject(todo.dueDate), new Date()) &&
            !todo.completed
          ) {
            return { ...todo, overdue: true };
          }
          return todo;
        }),
      };
    });

    if (JSON.stringify(currentProjects) !== JSON.stringify(updatedProjects))
      return updatedProjects;
    return currentProjects;
  });
}

export function convertToDateObject(dateObject) {
  if (!dateObject) return "";

  const [day, month, year] = dateObject.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export function getLocalStorage(setter) {
  if (storageAvailable("localStorage")) {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects) {
      setter(storedProjects);
    }
  }
}

export function setLocalStorage(projects) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
