import { mutate } from "swr";
import { bookAPI } from "../api/book";
import { Book } from "../models/Book";
import { BookModalForm } from "./BookModalForm";

interface AddBookModalProps {
    onClose: () => void;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({ onClose }) => {

    const handleAdd = async (book: Book) => {
        await bookAPI.addBook(book);
        mutate(
            () => true,
            undefined,
        );
        onClose();
    }

    return <BookModalForm onClose={onClose} onSubmit={handleAdd} />
}