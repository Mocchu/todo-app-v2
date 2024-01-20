import { Input, Select, SelectItem } from "@nextui-org/react";
import { AlertCircle } from "lucide-react";
import { DatePicker } from "./DatePicker";

export default function NewTodoForm() {
  return (
    <form onClick={(e) => e.preventDefault()}>
      <ul className="flex flex-col gap-4 pt-4">
        <li>
          <Input
            name="title"
            variant="bordered"
            size="sm"
            label="Task name"
            radius="lg"
            autoFocus
            isRequired
          />
        </li>
        <li>
          <Input
            name="description"
            variant="bordered"
            size="sm"
            label="Description"
            radius="lg"
          />
        </li>

        <li>
          <Select label="Priority" size="sm" variant="bordered" radius="lg">
            <SelectItem
              key="low"
              startContent={<AlertCircle className="w-4 text-green-400" />}
            >
              Low
            </SelectItem>
            <SelectItem
              key="med"
              startContent={<AlertCircle className="w-4 text-yellow-400" />}
            >
              Medium
            </SelectItem>
            <SelectItem
              key="high"
              startContent={<AlertCircle className="w-4 text-red-400" />}
            >
              High
            </SelectItem>
          </Select>
        </li>

        <li>
          <DatePicker></DatePicker>
        </li>
      </ul>
    </form>
  );
}
