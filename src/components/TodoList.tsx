import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Checkbox,
} from "@nextui-org/react";
import NewTodoPopover from "./NewTodo/NewTodoPopover";
import { useCallback } from "react";
import { DeleteIcon } from "lucide-react";

export default function TodoList({ project, setProjects, activeProjectKey }) {
  const statusColorMap = {
    low: "success",
    med: "warning",
    high: "danger",
  };

  const renderCell = useCallback((todo, columnKey) => {
    const cellValue = todo[columnKey];

    switch (columnKey) {
      case "completed": {
        return (
          <div className="flex justify-start">
            <Checkbox
              color="default"
              size="sm"
              className="ml-[1px]"
              isSelected={cellValue}
            />
          </div>
        );
      }

      case "title":
        return (
          <div className="flex max-h-10 max-w-44 flex-col">
            <p className="text-bold truncate text-nowrap break-all text-sm">
              {cellValue}
            </p>
            <p className="text-boldtext-sm truncate text-nowrap break-all text-default-400">
              {todo.description}
            </p>
          </div>
        );

      case "priority":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[todo.priority]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );

      case "actions":
        return (
          <Tooltip color="danger" content="Delete todo" closeDelay={100}>
            <DeleteIcon className="ml-[13px] w-4 cursor-pointer text-lg text-danger active:opacity-50" />
          </Tooltip>
        );
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    { key: "completed", label: "Status" },
    { key: "title", label: "Title" },
    { key: "dueDate", label: "Due date" },
    { key: "priority", label: "Priority" },
    { key: "actions", label: "Actions" },
  ];

  return (
    <div className="@container">
      <div className="flex h-full flex-col gap-4 px-4 py-20 @4xl:px-16 @5xl:px-52">
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>

        <NewTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
        />

        <Table
          aria-label="Todo list"
          selectionMode="single"
          disabledKeys={project.todos.map((todo) => {
            if (todo.completed) return todo.key;
          })}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody
            items={project.todos}
            emptyContent={"All tasks completed!"}
          >
            {(todo) => (
              // @ts-ignore comment
              <TableRow
                // @ts-ignore comment
                key={todo.key}
                className={
                  // @ts-ignore comment
                  "cursor-pointer " + (todo.completed ? "line-through" : "")
                }
              >
                {(columnKey) => (
                  <TableCell>{renderCell(todo, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
