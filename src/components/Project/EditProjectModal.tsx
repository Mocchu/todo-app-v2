import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function EditProjectModal({
  isOpen,
  onOpenChange,
  setProjects,
  toast,
  activeProject,
  setActiveProjectKey,
}) {
  const [title, setTitle] = useState("");

  function handleSubmit(onClose) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.key !== activeProject.key) return project;
        return { ...project, title: title };
      });
    });

    toast({
      title: `✨ Project edited: ${title}`,
      description: "Access your updated project from the sidebar",
    });

    onClose();
  }

  function handleDelete(onClose) {
    setProjects((currentProjects) => {
      setActiveProjectKey(currentProjects[0].key);
      return currentProjects.filter(
        (project) => project.key !== activeProject.key,
      );
    });

    toast({
      // @ts-ignore
      title: `🗑️ Project deleted: ${activeProject.title}`,
      description: "This action is permanent!",
    });

    onClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => setTitle("")}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Edit a project</p>
                <p className="text-sm font-normal text-default-400">
                  Customise your project details here. Click edit project when
                  done.
                </p>
              </ModalHeader>

              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  variant="bordered"
                  defaultValue={activeProject.title}
                  // @ts-ignore
                  onChange={(e) => setTitle(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  className="flex min-w-min gap-2 bg-danger text-white dark:text-white "
                  startContent={<Trash className="w-4 pt-[3px]" />}
                  onPress={() => handleDelete(onClose)}
                  isIconOnly
                ></Button>
                <Button
                  color="primary"
                  onPress={() => {
                    if (title === "") onClose();
                    else {
                      handleSubmit(onClose);
                    }
                  }}
                >
                  Edit project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
