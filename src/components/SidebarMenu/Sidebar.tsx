import { ModeToggle } from "../mode-toggle";
import { Divider, useDisclosure } from "@nextui-org/react";
import NewProjectModal from "../Project/NewProjectModal";
import { useState } from "react";
import EditProjectModal from "../Project/EditProjectModal";
import MainNav from "./MainNav";
import UserProfile from "./UserProfile";
import ProjectsNav from "./ProjectsNav";

export default function Sidebar({
  projects,
  setProjects,
  activeProjectKey,
  setActiveProjectKey,
  toast,
}) {
  const {
    isOpen: newProjectIsOpen,
    onOpen: newProjectOnOpen,
    onOpenChange: newProjectOnOpenChange,
  } = useDisclosure();
  const {
    isOpen: editProjectIsOpen,
    onOpen: editProjectOnOpen,
    onOpenChange: editProjectOnOpenChange,
  } = useDisclosure();

  const [editProjectDetails, setEditProjectDetails] = useState({});
  const svgColor = "#a8a8a8";

  function handleEditProjectClick(project) {
    setEditProjectDetails(project);
    editProjectOnOpen();
  }

  return (
    <div className="flex h-full flex-col items-start gap-4 bg-zinc-100 p-8 dark:bg-zinc-900">
      <NewProjectModal
        isOpen={newProjectIsOpen}
        onOpenChange={newProjectOnOpenChange}
        setProjects={setProjects}
        toast={toast}
      />

      <EditProjectModal
        isOpen={editProjectIsOpen}
        onOpenChange={editProjectOnOpenChange}
        setActiveProjectKey={setActiveProjectKey}
        setProjects={setProjects}
        toast={toast}
        activeProject={editProjectDetails}
      />

      <UserProfile />

      <MainNav svgColor={svgColor} />

      <Divider className="my-2" />

      <ProjectsNav
        projects={projects}
        newProjectOnOpen={newProjectOnOpen}
        activeProjectKey={activeProjectKey}
        svgColor={svgColor}
        setActiveProjectKey={setActiveProjectKey}
        handleEditProjectClick={handleEditProjectClick}
      />

      <ul className="mt-auto">
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
