import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@yamada-ui/react";
import { MovieForm } from "../form/movie_regiter/MovieForm";

export const AddMovieModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>映画情報追加</ModalHeader>

        <ModalBody>
          <MovieForm />
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
