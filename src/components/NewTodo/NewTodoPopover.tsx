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
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

export default function NewTodoPopover() {
  const [date, setDate] = useState<Date>();

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

        <NewTodoForm />

        <SheetFooter className="pt-4">
          <SheetClose asChild>
            <Button type="submit">Add task</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
