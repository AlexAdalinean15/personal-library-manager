import { Typography, Button } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";
import { bookAPI } from "../../api/book";
import { BooksTable } from "../../components/BooksTable";
import { Modals, ModalState } from "../../components/Modals";
import { Book } from "../../models/Book";
import { responsiveFontSize, responsiveHeaderFontSize } from "../../styles/styles";

export const Books: React.FC = () => {
  const [modalState, setModalState] = useState<ModalState>({
    type: 'closed',
  });

  const { data: books, error, isLoading } = useSWR('/books', bookAPI.fetchBooks);
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error...</div>
  }
  if (!books) {
    return null;
  }

  const handleOnEdit = (book: Book) => {
    setModalState({ type: 'edit', book });
  };

  const handleOnDelete = (book: Book) => {
    setModalState({ type: 'delete', book });
  };

  return (
    <div className="App">
      <Typography variant="h5"
        sx={{
          textAlign: 'center',
          paddingTop: '2rem',
          ...responsiveHeaderFontSize
        }}>
        My Personal Library
      </Typography>
      <BooksTable books={books} onEdit={handleOnEdit} onDelete={handleOnDelete} />
      <Modals
        state={modalState}
        onClose={() => setModalState({ type: 'closed' })}
      />
      <Button onClick={() => { setModalState({ type: 'add' }) }}
        sx={{
          marginTop: '1rem',
          width: 'auto',
          whiteSpace: 'nowrap',
          marginRight: '0',
          lineHeight: '1.5',
          ...responsiveFontSize
        }}
        color="primary" variant="contained" fullWidth>
        Add new book
      </Button>
    </div>
  );
}