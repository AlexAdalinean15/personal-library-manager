import { Book } from "../models/Book";
import { AddBookModal } from "./AddBookModal";
import { DeleteBookModal } from "./DeleteBookModal";
import { EditBookModal } from "./EditBookModal";

export type ModalState = { type: 'closed' } | { type: 'add' } | { type: 'edit'; book: Book } | { type: 'delete'; book: Book };

interface ModalsProps {
  state: ModalState;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ state, onClose, }) => {
  switch (state.type) {
    case 'closed':
      return null;
    case 'add':
      return <AddBookModal onClose={onClose} />;
    case 'edit':
      return (
        <EditBookModal
          book={state.book}
          onClose={onClose}
        />
      );
    case 'delete':
      return (
        <DeleteBookModal
          book={state.book}
          onClose={onClose}
        />
      );
    default:
      return null;
  }
}