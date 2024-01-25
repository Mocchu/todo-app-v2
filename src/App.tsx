import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { exampleData } from "./assets/exampleData";
import { getLocalStorage, setLocalStorage, setOverdue } from "./lib/todoUtils";

export default function App() {
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) || exampleData;
  });

  const [activeProjectKey, setActiveProjectKey] = useState(projects[0].key);
  // const allTodos = projects.flatMap((project) => project.todos);

  useEffect(() => getLocalStorage(setProjects), []);
  useEffect(() => setLocalStorage(projects), [projects]);
  useEffect(() => setOverdue(setProjects), [projects]);

  return (
    <ResizablePanelGroup direction="horizontal" className="fadeInUp-animation">
      <ResizablePanel defaultSize={22} className="min-h-svh min-w-min">
        <Sidebar
          projects={projects}
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          setActiveProjectKey={setActiveProjectKey}
        />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel>
        <TodoList
          // @ts-ignore
          project={projects.find((project) => project.key === activeProjectKey)}
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          projects={projects}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
