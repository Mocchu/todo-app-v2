// import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function PriorityPicker({ handleInputChange }) {
  return (
    <Select>
      <SelectTrigger className="h-12 border-2 text-gray-500 duration-200 ease-in-out dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white">
        <SelectValue placeholder="Pick a priority level" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="Low"
            className="cursor-pointer text-green-400 duration-300 ease-in-out"
          >
            Low
          </SelectItem>

          <SelectItem
            value="Med"
            className="text cursor-pointer text-yellow-400 duration-300 ease-in-out"
          >
            Medium
          </SelectItem>

          <SelectItem
            value="High"
            className="text cursor-pointer text-red-400 duration-300 ease-in-out"
          >
            High
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    // <Select
    //   label="Priority"
    //   size="sm"
    //   variant="bordered"
    //   radius="lg"
    //   onChange={(e) => handleInputChange(e.target.value)}
    // >
    //   <SelectItem
    //     key="Low"
    //     startContent={<AlertCircle className="w-4 text-green-400" />}
    //   >
    //     Low
    //   </SelectItem>
    //   <SelectItem
    //     key="Med"
    //     startContent={<AlertCircle className="w-4 text-yellow-400" />}
    //   >
    //     Medium
    //   </SelectItem>
    //   <SelectItem
    //     key="High"
    //     startContent={<AlertCircle className="w-4 text-red-400" />}
    //   >
    //     High
    //   </SelectItem>
    // </Select>
  );
}
