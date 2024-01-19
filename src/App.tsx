import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function App() {
  const [projects, setProjects] = useState([
    {
      title: "Build a todo-list app",
      key: crypto.randomUUID(),
    },
    {
      title: "Learn React",
      key: crypto.randomUUID(),
    },
  ]);

  const [activeProject, setActiveProject] = useState(projects[0].key);

  return (
    <div className="h-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={22} className="min-w-min">
          <Sidebar
            projects={projects}
            setProjects={setProjects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>
          <TodoList />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
