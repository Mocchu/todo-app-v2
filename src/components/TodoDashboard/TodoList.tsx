import NewTodoPopover from "../NewTodo/NewTodoPopover";
import { useState } from "react";
import EditTodoPopover from "../EditTodo/EditTodoPopover";
import TodoTable from "./TodoTable";
import { Button } from "@nextui-org/react";
import { StepBack, Undo2, icons } from "lucide-react";

export default function TodoList({
  setProjects,
  activeProjectKey,
  projects,
  toast,
  isMobile,
  setShowTodoListMobile,
}) {
  console.log(isMobile);
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
      <div
        className={
          "flex h-full flex-col gap-4 px-4 @4xl:px-16 @5xl:px-52 " +
          (isMobile ? "pt-4" : "py-20")
        }
      >
        {isMobile && (
          <Button isIconOnly onClick={() => setShowTodoListMobile(false)}>
            <Undo2 />
          </Button>
        )}
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>

        <NewTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          toast={toast}
          isMobile={isMobile}
        />

        <EditTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          selectedTodoKey={selectedTodoKey}
          openNewTodoSheet={openNewTodoSheet}
          setOpenEditTodoSheet={setOpenEditTodoSheet}
          projects={projects}
          toast={toast}
          isMobile={isMobile}
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
