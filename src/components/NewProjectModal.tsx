import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useRef } from "react";

export default function NewProjectModal({ isOpen, onOpenChange, setProjects }) {
  const titleRef = useRef("");

  function handleSubmit(onClose) {
    // @ts-ignore
    const title = titleRef.current.value;
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
                  ref={titleRef}
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
