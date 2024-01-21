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
import { DeleteIcon, EditIcon } from "lucide-react";

export default function TodoList({ project, setProjects, activeProjectKey }) {
  const statusColorMap = {
    low: "success",
    med: "warning",
    high: "danger",
  };

  const renderCell = useCallback((todo, columnKey) => {
    const cellValue = todo[columnKey];

    switch (columnKey) {
      case "status": {
        return (
          <div className="flex justify-start">
            <Checkbox
              color="default"
              size="sm"
              className="ml-[1px]"
              value={cellValue}
            />
          </div>
        );
      }

      case "title":
        return (
          <div className="flex max-h-10 max-w-44 flex-col">
            <p className="text-bold text-sm">{cellValue}</p>
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
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit todo" closeDelay={100}>
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EditIcon className="w-4" />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete todo" closeDelay={100}>
              <span className="cursor-pointer text-lg text-danger active:opacity-50">
                <DeleteIcon className="w-4" />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    { key: "status", label: "Status" },
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

        <Table aria-label="Todo list" selectionMode="single">
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
              <TableRow key={todo.key} className="cursor-pointer">
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
