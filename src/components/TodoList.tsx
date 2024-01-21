import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import NewTodoPopover from "./NewTodo/NewTodoPopover";

export default function TodoList({ project, setProjects, activeProjectKey }) {
  const columns = [
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
            {(item) => (
              // @ts-ignore comment
              <TableRow key={item.key} className="cursor-pointer">
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
