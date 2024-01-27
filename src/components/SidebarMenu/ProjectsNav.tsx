import { Button as ButtonShad } from "@/components/ui/button";
import { Button, ButtonGroup } from "@nextui-org/react";
import { List, MoreVertical, Plus } from "lucide-react";
import { useState } from "react";

export default function ProjectsNav({
  projects,
  newProjectOnOpen,
  activeProjectKey,
  svgColor,
  setActiveProjectKey,
  handleEditProjectClick,
}) {
  const [isProjectHovered, setIsProjectHovered] = useState("");

  return (
    <nav className="w-full">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold">Projects</h2>

        <ButtonShad
          onClick={newProjectOnOpen}
          size="icon"
          variant="secondary"
          className="h-5 w-5"
        >
          <Plus className="w-3" />
        </ButtonShad>
      </div>

      <ul className="flex w-full flex-col">
        {projects.map((project) => (
          <li
            key={project.key}
            className="fadeInProject rounded-md transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <ButtonGroup
              className="flex"
              onMouseEnter={() => setIsProjectHovered(project.key)}
              onMouseLeave={() => setIsProjectHovered("")}
            >
              <Button
                fullWidth
                variant={project.key === activeProjectKey ? "solid" : "light"}
                startContent={<List color={svgColor} className="mr-1 w-5" />}
                className="flex justify-start"
                onClick={() => {
                  setActiveProjectKey(project.key);
                  setIsProjectHovered(project.key);
                }}
              >
                {project.title}
              </Button>

              <Button
                isIconOnly
                variant={project.key === activeProjectKey ? "solid" : "light"}
                onClick={() => handleEditProjectClick(project)}
              >
                {isProjectHovered === project.key && (
                  <MoreVertical className="w-4 text-neutral-400" />
                )}
              </Button>
            </ButtonGroup>
          </li>
        ))}
      </ul>
    </nav>
  );
}
