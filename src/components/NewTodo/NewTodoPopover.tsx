import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Button as ButtonNext } from "@nextui-org/react";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { createEmptyTodo } from "@/lib/todoUtils";

export default function NewTodoPopover({
  setProjects,
  activeProjectKey,
  toast,
  isMobile,
}) {
  const [newTodo, setNewTodo] = useState(createEmptyTodo());
  const [openNewTodoSheet, setOpenNewTodoSheet] = useState(false);

  function handleSubmit() {
    if (newTodo.title === "") return;

    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.key !== activeProjectKey) return project;

        return { ...project, todos: [...project.todos, newTodo] };
      });
    });

    toast({
      title: `✨ New todo created: ${newTodo.title}`,
      description: "Access your new todo within your project!",
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setOpenNewTodoSheet(false);
    handleSubmit();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Sheet open={openNewTodoSheet} onOpenChange={setOpenNewTodoSheet}>
        <SheetTrigger asChild className="w-min">
          <Button className="flex min-w-min gap-1">
            <Plus className="w-4" />
            Add task
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className={isMobile ? "w-full" : ""}>
          <SheetHeader>
            <SheetTitle>Create a new task</SheetTitle>
            <SheetDescription>
              Customise your task details here. Click add task when done.
            </SheetDescription>
          </SheetHeader>
          <NewTodoForm setNewTodo={setNewTodo} />
          <SheetFooter className="pt-4">
            <SheetClose asChild>
              <ButtonNext
                type="submit"
                className="flex min-w-min gap-1 bg-black text-white dark:bg-white dark:text-black "
                startContent={<Plus className="w-4" />}
                onClick={handleSubmit}
              >
                Add task
              </ButtonNext>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </form>
  );
}
