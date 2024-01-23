import { Input, Textarea } from "@nextui-org/react";
import { EditDatePicker } from "./EditDatePicker";
import EditPriorityPicker from "./EditPriorityPicker";

export default function EditTodoForm({ setNewTodo, selectedTodo }) {
  if (!selectedTodo) return;

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
            label="Task name"
            variant="bordered"
            size="sm"
            radius="lg"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            defaultValue={selectedTodo.title}
            autoFocus
            isRequired
          />
        </li>

        <li>
          <Textarea
            name="description"
            label="Description"
            variant={"bordered"}
            className="col-span-12 mb-6 md:col-span-6 md:mb-0"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            defaultValue={selectedTodo.description}
          />
        </li>

        <li>
          <EditPriorityPicker
            handleInputChange={handleInputChange}
            selectedTodo={selectedTodo}
          />
        </li>

        <li>
          <EditDatePicker
            handleInputChange={handleInputChange}
            selectedTodo={selectedTodo}
          ></EditDatePicker>
        </li>
      </ul>
    </form>
  );
}
