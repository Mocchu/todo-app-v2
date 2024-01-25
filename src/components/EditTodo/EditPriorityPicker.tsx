import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AlertCircle } from "lucide-react";

export default function EditPriorityPicker({
  handleInputChange,
  selectedTodo,
}) {
  if (!selectedTodo) return;

  return (
    <Select
      onValueChange={(value) => handleInputChange("priority", value)}
      defaultValue={selectedTodo.priority}
    >
      <SelectTrigger className="h-12 border-2 text-black duration-200 ease-in-out dark:text-white dark:hover:bg-zinc-800">
        <div className="flex items-center gap-2">
          <AlertCircle className="ml-1 mt-[2px] w-4" />
          <SelectValue placeholder="Pick a priority level" />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="Low"
            className="cursor-pointer duration-300 ease-in-out"
          >
            Low
          </SelectItem>

          <SelectItem
            value="Med"
            className="text cursor-pointer duration-300 ease-in-out"
          >
            Medium
          </SelectItem>

          <SelectItem
            value="High"
            className="text cursor-pointer duration-300 ease-in-out"
          >
            High
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
