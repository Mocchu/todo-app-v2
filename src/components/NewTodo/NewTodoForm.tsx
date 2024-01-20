import { Input, Textarea } from "@nextui-org/react";
import { DatePicker } from "./DatePicker";
import PriorityPicker from "./PriorityPicker";

export default function NewTodoForm({ setNewTodo }) {
  function handleInputChange(name, value) {
    setNewTodo((currentNewTodo) => {
      return { ...currentNewTodo, [name]: value };
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <ul className="flex flex-col gap-4 pt-4">
        <li>
          <Input
            name="title"
            variant="bordered"
            size="sm"
            label="Task name"
            radius="lg"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            autoFocus
            isRequired
          />
        </li>

        <li>
          <Textarea
            variant={"bordered"}
            label="Description"
            className="col-span-12 mb-6 md:col-span-6 md:mb-0"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </li>

        <li>
          <PriorityPicker handleInputChange={handleInputChange} />
        </li>

        <li>
          <DatePicker handleInputChange={handleInputChange}></DatePicker>
        </li>
      </ul>
    </form>
  );
}
