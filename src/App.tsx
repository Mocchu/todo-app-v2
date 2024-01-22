import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { exampleData } from "../public/exampleData";

export default function App() {
  const [projects, setProjects] = useState(exampleData);
  const [activeProjectKey, setActiveProjectKey] = useState(projects[0].key);
  // const allTodos = projects.flatMap((project) => project.todos);

  // console.log(projects[0].todos[0].title);

  return (
    <div className="h-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={22} className="min-w-min">
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
            project={projects.find(
              (project) => project.key === activeProjectKey,
            )}
            setProjects={setProjects}
            activeProjectKey={activeProjectKey}
            projects={projects}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
