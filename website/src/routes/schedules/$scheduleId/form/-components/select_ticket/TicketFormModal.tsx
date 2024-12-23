import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "@yamada-ui/react";
import { TicketFormProvider } from "./TicketForm";

type TicketFormModalProps = {
  scheduleId: string;
};
export const TicketFormModal = (props: TicketFormModalProps) => {
  const { scheduleId } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={styles.centerContainer}>
      {" "}
      {/* 中央に配置するためのコンテナ */}
      <Button onClick={onOpen}>チケット選択</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>チケット選択</ModalHeader>

        <ModalBody>
          {scheduleId && <TicketFormProvider scheduleId={scheduleId} />}
        </ModalBody>
      </Modal>
    </div>
  );
};

const styles = {
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
  },
};
