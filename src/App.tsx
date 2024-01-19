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
      title: "Learn React",
      key: crypto.randomUUID(),
      todos: [
        {
          title: "Watch youtube tutorials",
          description: "Some description",
          dueDate: "21/02/2024",
          priority: "Low",
          key: crypto.randomUUID(),
        },
        {
          title: "Build some projects",
          description:
            "Some long descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
          dueDate: "23/04/2024",
          priority: "Med",
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      title: "Build a todo-list app",
      key: crypto.randomUUID(),
      todos: [
        {
          title: "Scaffold the UI",
          description: "Some description",
          dueDate: "19/01/2024",
          priority: "High",
          key: crypto.randomUUID(),
        },
      ],
    },
  ]);

  const [activeProjectKey, setActiveProjectKey] = useState(projects[0].key);

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
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
