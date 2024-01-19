import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

export default function TodoList({ project }) {
  const columns = [
    { key: "title", label: "Title" },
    { key: "dueDate", label: "Due Date" },
    { key: "priority", label: "Priority" },
  ];

  return (
    <div className="@container">
      <div className="@4xl:px-16 @5xl:px-52 h-full px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold">{project.title}</h1>
        <Table aria-label="Todo list" selectionMode="single">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody
            items={project.todos}
            emptyContent={"Nothing to see here!"}
          >
            {(item) => (
              // @ts-ignore comment
              <TableRow key={item.key}>
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
