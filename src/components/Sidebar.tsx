import {
  CalendarCheck,
  CalendarDays,
  CalendarX,
  List,
  Plus,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Divider, User, Button, Link, useDisclosure } from "@nextui-org/react";
import { Button as ButtonShad } from "@/components/ui/button";
import NewProjectModal from "./NewProjectModal";

export default function Sidebar({
  projects,
  setProjects,
  activeProjectKey,
  setActiveProjectKey,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
            className="text-slate-500 dark:text-slate-400"
          >
            github@Mocchu
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
              startContent={<CalendarX color={svgColor} className="mr-1 w-5" />}
              className="flex justify-start"
            >
              Today
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              variant="light"
              startContent={
                <CalendarDays color={svgColor} className="mr-1 w-5" />
              }
              className="flex justify-start"
            >
              Upcoming
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              variant="light"
              startContent={
                <CalendarCheck color={svgColor} className="mr-1 w-5" />
              }
              className="flex justify-start"
            >
              Completed
            </Button>
          </li>
        </ul>
      </nav>

      <Divider className="my-2" />
      <nav className="w-full">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold">Projects</h2>
          <ButtonShad
            onClick={onOpen}
            size="icon"
            variant="secondary"
            className="h-5 w-5"
          >
            <Plus className="w-3" />
          </ButtonShad>
          <NewProjectModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            setProjects={setProjects}
          />
        </div>

        <ul className="flex w-full flex-col">
          {projects.map((project) => (
            <li key={project.key}>
              <Button
                fullWidth
                variant={project.key === activeProjectKey ? "solid" : "light"}
                startContent={<List color={svgColor} className="mr-1 w-5" />}
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
