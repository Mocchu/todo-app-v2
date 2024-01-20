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
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    key: crypto.randomUUID(),
  });

  function handleSubmit() {
    setProjects((currentProjects) => [...currentProjects, newTodo]);
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
              // onClick={handleSubmit}
            >
              Add task
            </ButtonNext>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
