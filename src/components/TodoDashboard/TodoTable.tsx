import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  TableHeader,
  Checkbox,
  Chip,
} from "@nextui-org/react";
import { useCallback } from "react";

export default function TodoTable({
  project,
  handleRowClick,
  handleCheckboxClick,
}) {
  const columns = [
    { key: "completed", label: "Status" },
    { key: "title", label: "Title" },
    { key: "dueDate", label: "Due date" },
    { key: "priority", label: "Priority" },
  ];

  const renderCell = useCallback((todo, columnKey) => {
    const cellValue = todo[columnKey];
    const statusColorMap = {
      Low: "success",
      Med: "warning",
      High: "danger",
    };

    switch (columnKey) {
      case "completed": {
        return (
          <div className="flex justify-start">
            <Checkbox
              color="default"
              size="md"
              className="ml-[1px]"
              defaultSelected={cellValue}
              onClick={() => handleCheckboxClick(todo.key)}
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
            <p className="text-boldtext-sm truncate text-nowrap break-all text-xs text-default-400">
              {todo.description}
            </p>
          </div>
        );

      case "priority":
        return (
          <Chip
            color={statusColorMap[todo.priority]}
            size="sm"
            variant="flat"
            className={todo.completed ? "line-through opacity-50" : ""}
          >
            {cellValue}
          </Chip>
        );

      case "dueDate":
        return (
          <p
            className={
              (todo.overdue ? "text-red-400" : "") +
              (todo.completed ? " opacity-50" : "")
            }
          >
            {cellValue}
          </p>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Todo list"
      selectionMode="single"
      disabledKeys={project.todos.map((todo) => {
        if (todo.completed) return todo.key;
      })}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={project.todos} emptyContent={"All tasks completed!"}>
        {(todo) => (
          // @ts-ignore comment
          <TableRow
            // @ts-ignore comment
            key={todo.key}
            className={
              "fadeInPage cursor-pointer transition-all " +
              // @ts-ignore comment
              (todo.completed ? "line-through decoration-neutral-500" : "")
            }
            // @ts-ignore comment
            onClick={(e) => handleRowClick(todo.key)}
          >
            {(columnKey) => (
              <TableCell>{renderCell(todo, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
