import NewTodoPopover from "../NewTodo/NewTodoPopover";
import { useState } from "react";
import EditTodoPopover from "../EditTodo/EditTodoPopover";
import TodoTable from "./TodoTable";

export default function TodoList({
  setProjects,
  activeProjectKey,
  projects,
  toast,
}) {
  const [selectedTodoKey, setselectedTodoKey] = useState("");
  const [openNewTodoSheet, setOpenEditTodoSheet] = useState(false);
  const project = projects.find((project) => project.key === activeProjectKey);

  function handleRowClick(key) {
    setselectedTodoKey(key);
    setOpenEditTodoSheet(true);
  }

  function handleCheckboxClick(todoKey) {
    setProjects((currentProjects) => {
      return currentProjects.map((project1) => {
        // IDK WHAT I DID HERE BUT IT WORKS ??? HOW
        if (project.key !== project.key) return project;

        return {
          ...project1,
          todos: project1.todos.map((todo) => {
            if (todo.key !== todoKey) return todo;
            return { ...todo, completed: !todo.completed };
          }),
        };
      });
    });
  }

  return (
    <div className="@container">
      <div className="flex h-full flex-col gap-4 px-4 py-20 @4xl:px-16 @5xl:px-52">
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>

        <NewTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          toast={toast}
        />

        <EditTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          selectedTodoKey={selectedTodoKey}
          openNewTodoSheet={openNewTodoSheet}
          setOpenEditTodoSheet={setOpenEditTodoSheet}
          projects={projects}
          toast={toast}
        />

        <TodoTable
          project={project}
          handleRowClick={handleRowClick}
          handleCheckboxClick={handleCheckboxClick}
        />
      </div>
    </div>
  );
}
