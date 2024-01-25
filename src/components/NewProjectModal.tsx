import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";

export default function NewProjectModal({ isOpen, onOpenChange, setProjects }) {
  const [title, setTitle] = useState("");

  function handleSubmit(onClose) {
    setProjects((currentProjects) => {
      return [
        ...currentProjects,
        { title: title, key: crypto.randomUUID(), todos: [] },
      ];
    });
    onClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        onClose={() => setTitle("")}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Create new project</p>
                <p className="text-sm font-normal text-default-400">
                  Create a new project here. Click create when done.
                </p>
              </ModalHeader>

              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter project name"
                  variant="bordered"
                  // @ts-ignore
                  onChange={(e) => setTitle(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    if (title === "") onClose();
                    else {
                      handleSubmit(onClose);
                    }
                  }}
                >
                  Create project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
