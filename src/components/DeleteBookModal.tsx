import { Modal, Box, Typography, Button } from "@mui/material";
import { responsiveFontSize, responsiveHeaderFontSize, style } from "../styles/styles";
import { Book } from "../models/Book";
import React from "react";
import { bookAPI } from "../api/book";
import { mutate } from "swr";

interface DeleteBookModalProps {
    book: Book;
    onClose: () => void;
}

export const DeleteBookModal: React.FC<DeleteBookModalProps> = ({ book, onClose }) => {

    const handleDelete = async () => {
        await bookAPI.deleteBook(book.id);
        mutate(
            () => true,
            undefined
        )
        onClose();
    }

    return (
        <Modal open={true} onClose={onClose} aria-labelledby="delete-modal-title" aria-describedby="delete-modal-description">
            <Box
                sx={style}
            >
                <Typography id="delete-modal-title" variant="h6" component="h2" gutterBottom sx={{ ...responsiveHeaderFontSize }}>
                    Confirm Deletion
                </Typography>
                <Typography id="delete-modal-description" sx={{ mt: 2, ...responsiveFontSize }}>
                    Are you sure you want to delete {book.title ? `"${book.title}"` : 'this book'}? This action cannot be undone.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                    <Button onClick={onClose} variant="outlined" sx={{ mr: 2, ...responsiveFontSize }}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} variant="contained" color="error" sx={{ ...responsiveFontSize }}>
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}