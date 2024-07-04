import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "@yamada-ui/react";
import { TicketFormProvider } from "./TicketForm";

export const TicketFormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>チケット選択</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>チケット選択</ModalHeader>

        <ModalBody>
          <TicketFormProvider />
        </ModalBody>
      </Modal>
    </>
  );
};
