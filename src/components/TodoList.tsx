import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Checkbox,
} from "@nextui-org/react";
import NewTodoPopover from "./NewTodo/NewTodoPopover";
import { useCallback, useState } from "react";
import EditTodoPopover from "./EditTodo/EditTodoPopover";

export default function TodoList({
  setProjects,
  activeProjectKey,
  projects,
  toast,
}) {
  const [selectedTodoKey, setselectedTodoKey] = useState("");
  const [openNewTodoSheet, setOpenEditTodoSheet] = useState(false);

  const project = projects.find((project) => project.key === activeProjectKey);

  function handleRowClick(key) {
    setselectedTodoKey(key);
    setOpenEditTodoSheet(true);
  }

  function handleCheckboxClick(todoKey) {
    setProjects((currentProjects) => {
      return currentProjects.map((project1) => {
        // IDK WHAT I DID HERE BUT IT WORKS ??? HOW
        if (project.key !== project.key) return project;

        return {
          ...project1,
          todos: project1.todos.map((todo) => {
            if (todo.key !== todoKey) return todo;
            return { ...todo, completed: !todo.completed };
          }),
        };
      });
    });
  }

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
              size="sm"
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
    <div className="@container">
      <div className="flex h-full flex-col gap-4 px-4 py-20 @4xl:px-16 @5xl:px-52">
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>

        <NewTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          toast={toast}
        />

        <EditTodoPopover
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          selectedTodoKey={selectedTodoKey}
          openNewTodoSheet={openNewTodoSheet}
          setOpenEditTodoSheet={setOpenEditTodoSheet}
          projects={projects}
          toast={toast}
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
      </div>
    </div>
  );
}
