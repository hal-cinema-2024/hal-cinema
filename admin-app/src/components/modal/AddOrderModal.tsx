import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@yamada-ui/react";
import { OrderForm } from "../../feature/order/OrderForm";
import "./OrderModal.css";

export const AddOrderModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button style={{ margin: "0px 50px" }} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <div className="custom-modal">
          <ModalHeader>オーダー追加</ModalHeader>
          <ModalBody>
            <OrderForm />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
};


