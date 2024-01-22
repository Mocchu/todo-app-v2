import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AlertCircle } from "lucide-react";

export default function PriorityPicker({ handleInputChange }) {
  return (
    <Select onValueChange={(value) => handleInputChange("priority", value)}>
      <SelectTrigger className="h-12 border-2 text-black duration-200 ease-in-out dark:text-white dark:hover:bg-zinc-800">
        <div className="flex items-center gap-2">
          <AlertCircle className="ml-1 mt-[2px] w-4" />
          <SelectValue placeholder="Pick a priority level" />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="Low" className="duration-300 ease-in-out">
            Low
          </SelectItem>

          <SelectItem value="Med" className="duration-300 ease-in-out">
            Medium
          </SelectItem>

          <SelectItem value="High" className="duration-300 ease-in-out">
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
