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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new project
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
                <Button color="primary" onPress={() => handleSubmit(onClose)}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
