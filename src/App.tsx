import { useEffect, useState } from "react";
import Sidebar from "./components/SidebarMenu/Sidebar";
import TodoList from "./components/TodoDashboard/TodoList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { exampleData } from "./assets/exampleData";
import { getLocalStorage, setLocalStorage, setOverdue } from "./lib/todoUtils";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "./components/ui/use-toast";

export default function App() {
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) || exampleData;
  });
  const [activeProjectKey, setActiveProjectKey] = useState(projects[0].key);
  const { toast } = useToast();

  useEffect(() => getLocalStorage(setProjects), []);
  useEffect(() => setLocalStorage(projects), [projects]);
  useEffect(() => setOverdue(setProjects), [projects]);

  return (
    <ResizablePanelGroup direction="horizontal" className="fadeInPage">
      <ResizablePanel defaultSize={22} className="min-h-svh min-w-min">
        <Sidebar
          projects={projects}
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          setActiveProjectKey={setActiveProjectKey}
          toast={toast}
        />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel>
        <TodoList
          setProjects={setProjects}
          activeProjectKey={activeProjectKey}
          projects={projects}
          toast={toast}
        />

        <Toaster />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
