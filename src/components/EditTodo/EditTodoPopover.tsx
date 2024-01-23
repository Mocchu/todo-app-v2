import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Edit, Trash } from "lucide-react";
import { Button as ButtonNext } from "@nextui-org/react";
import { useEffect, useState } from "react";
import EditTodoForm from "./EditTodoForm";
import { createEmptyTodo } from "@/lib/todoUtils";

export default function EditTodoPopover({
  setProjects,
  activeProjectKey,
  selectedTodoKey,
  openNewTodoSheet,
  setOpenEditTodoSheet,
  projects,
}) {
  const [newTodo, setNewTodo] = useState({});

  // This is probably a terrible way of setting initial state
  useEffect(() => {
    setNewTodo(findSelectedTodo());
  }, [selectedTodoKey, projects]);

  function handleSubmit() {
    setOpenEditTodoSheet(false);

    // @ts-ignore
    if (newTodo.title === "") return;

    // Find the todo in state and return a new projects array with the edited todo
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.key !== activeProjectKey) return project;

        return {
          ...project,
          todos: project.todos.map((todo) => {
            return todo.key === selectedTodoKey ? newTodo : todo;
          }),
        };
      });
    });
    setNewTodo(createEmptyTodo());
  }

  function handleDelete() {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.key !== activeProjectKey) return project;

        return {
          ...project,
          todos: project.todos.filter((todo) => todo.key !== selectedTodoKey),
        };
      });
    });
    setNewTodo(createEmptyTodo());
  }

  function findSelectedTodo() {
    const activeProject = projects.find((project) => {
      return project.key === activeProjectKey;
    });

    return activeProject.todos.find((todo) => {
      return todo.key === selectedTodoKey;
    });
  }

  return (
    <Sheet open={openNewTodoSheet} onOpenChange={setOpenEditTodoSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit a task</SheetTitle>
          <SheetDescription>
            Customise your task details here. Click edit task when done.
          </SheetDescription>
        </SheetHeader>

        <EditTodoForm
          setNewTodo={setNewTodo}
          selectedTodo={findSelectedTodo()}
        />

        <SheetFooter className="pt-4">
          <SheetClose asChild className="flex gap-4">
            <ButtonNext
              className="flex min-w-min gap-2 bg-danger text-white dark:text-white "
              startContent={<Trash className="w-4 pt-[3px]" />}
              onPress={handleDelete}
              isIconOnly
            ></ButtonNext>
          </SheetClose>
          <ButtonNext
            type="submit"
            className="flex min-w-min gap-2 bg-black text-white dark:bg-white dark:text-black "
            startContent={<Edit className="w-4 pt-[3px]" />}
            onPress={handleSubmit}
          >
            Edit Task
          </ButtonNext>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
