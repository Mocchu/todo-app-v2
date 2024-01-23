import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Edit } from "lucide-react";
import { Button as ButtonNext } from "@nextui-org/react";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";

export default function EditTodoPopover({
  setProjects,
  activeProjectKey,
  selectedTodoKey,
  openNewTodoSheet,
  setOpenEditTodoSheet,
  projects,
}) {
  const [newTodo, setNewTodo] = useState(createEmptyTodo());

  function handleSubmit() {
    if (newTodo.title === "") return;

    // Find the todo in state and return a new projects array with the edited todo
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.key === activeProjectKey) {
          return {
            ...project,
            todos: project.todos.map((todo) => {
              return todo.key === selectedTodoKey ? newTodo : todo;
            }),
          };
        }
        return project;
      });
    });
    setNewTodo(createEmptyTodo());
  }

  function createEmptyTodo() {
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

  const selectedTodo = (function findSelectedTodo() {
    const activeProject = projects.find((project) => {
      return project.key === activeProjectKey;
    });

    return activeProject.todos.find((todo) => {
      return todo.key === selectedTodoKey;
    });
  })();

  return (
    <Sheet open={openNewTodoSheet} onOpenChange={setOpenEditTodoSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit a task</SheetTitle>
          <SheetDescription>
            Customise your task details here. Click edit task when done.
          </SheetDescription>
        </SheetHeader>

        <EditTodoForm setNewTodo={setNewTodo} selectedTodo={selectedTodo} />

        <SheetFooter className="pt-4">
          <SheetClose asChild>
            <ButtonNext
              type="submit"
              className="flex min-w-min gap-2 bg-black text-white dark:bg-white dark:text-black "
              startContent={<Edit className="w-4 pt-[3px]" />}
              onPress={handleSubmit}
            >
              Edit task
            </ButtonNext>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
