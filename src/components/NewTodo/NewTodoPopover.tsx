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

export default function NewTodoPopover(setProjects) {
  const [newTodo, setNewTodo] = useState(createEmptyTodo());

  function createEmptyTodo() {
    return {
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      key: crypto.randomUUID(),
    };
  }

  function handleSubmit() {
    setNewTodo(createEmptyTodo);
    console.log(newTodo);

    setProjects((currentProjects) => {
      console.log("use key to find project and append new todo");
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="w-min">
        <Button className="flex min-w-min gap-1">
          <Plus className="w-4" />
          Add task
        </Button>
      </SheetTrigger>

      <SheetContent>
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
              onPress={handleSubmit}
            >
              Add task
            </ButtonNext>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
