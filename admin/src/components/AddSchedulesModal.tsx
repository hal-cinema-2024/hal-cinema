import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@yamada-ui/react";
import { MovieForm } from "../form/movie_regiter/MovieForm";

export const AddSchedulesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button style={{ margin: "0px 50px" }} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>スケジュール追加</ModalHeader>

        <ModalBody>
          <MovieForm />
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
