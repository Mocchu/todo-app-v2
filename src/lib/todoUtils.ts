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

export function convertToDateObject(dateObject) {
  if (!dateObject) return "";

  const [day, month, year] = dateObject.split("/").map(Number);
  return new Date(year, month - 1, day);
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
