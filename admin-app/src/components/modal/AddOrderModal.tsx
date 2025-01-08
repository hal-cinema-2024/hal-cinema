import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@yamada-ui/react";
import { OrderForm } from "../../feature/order/register/OrderForm";

export const AddOrderModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button style={{ margin: "0px 50px" }} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>オーダー追加</ModalHeader>
        <ModalBody>
          <OrderForm scheduleId={""} />
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
