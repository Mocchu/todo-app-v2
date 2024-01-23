import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { exampleData } from "./assets/exampleData";

export default function App() {
  const [projects, setProjects] = useState(exampleData);
  const [activeProjectKey, setActiveProjectKey] = useState(projects[0].key);
  // const allTodos = projects.flatMap((project) => project.todos);

  function setOverdue() {
    setProjects((project) => {
      return {
        // @ts-ignore
        ...project, todos: project.todos.map(todo => {
          if (todo.dueDate)
        })
      }
    })
  }

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
