import { CalendarCheck, CalendarDays, CalendarX, List } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Divider, User, Button, Link } from "@nextui-org/react";

export default function Sidebar({
  projects,
  setProjects,
  activeProjectKey,
  setActiveProjectKey,
}) {
  const svgColor = "#a8a8a8";

  return (
    <div className="flex h-full flex-col items-start gap-4 bg-zinc-100 p-8 dark:bg-zinc-900">
      <User
        name="Joseph"
        description={
          <Link
            href="https://github.com/Mocchu"
            size="sm"
            isExternal
            className="text-blue-500"
          >
            @Mocchu
          </Link>
        }
        className="mb-4"
      />

      <nav className="w-full">
        <ul className="flex w-full flex-col">
          <li>
            <Button
              fullWidth
              variant="light"
              startContent={<CalendarX color={svgColor} />}
              className="flex justify-start"
            >
              Today
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              variant="light"
              startContent={<CalendarDays color={svgColor} />}
              className="flex justify-start"
            >
              Upcoming
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              variant="light"
              startContent={<CalendarCheck color={svgColor} />}
              className="flex justify-start"
            >
              Completed
            </Button>
          </li>
        </ul>
      </nav>

      <Divider className="my-2" />
      <nav className="w-full">
        <h2 className="mb-2 text-sm font-semibold">Projects</h2>
        <ul className="flex w-full flex-col">
          {projects.map((project) => (
            <li key={project.key}>
              <Button
                fullWidth
                variant={project.key === activeProjectKey ? "solid" : "light"}
                startContent={<List color={svgColor} />}
                className="flex justify-start"
                onClick={() => setActiveProjectKey(project.key)}
              >
                {project.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="mt-auto">
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
