import { mutate } from "swr";
import { bookAPI } from "../api/book";
import { Book } from "../models/Book";
import { BookModalForm } from "./BookModalForm";

interface EditBookModalProps {
    book: Book;
    onClose: () => void;
}

export const EditBookModal: React.FC<EditBookModalProps> = ({ book, onClose }) => {

    const handleEdit = async (book: Book) => {
        await bookAPI.updateBook(book.id, book);
        mutate(
            () => true,
            undefined
        );
        onClose();
    }

    return <BookModalForm onClose={onClose} initialValues={book} onSubmit={handleEdit} />
}