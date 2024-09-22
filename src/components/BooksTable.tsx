import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Book } from '../models/Book';
import { responsiveFontSize } from '../styles/styles';

interface BooksTableProps {
    books: Book[];
    onEdit: (book: Book) => void;
    onDelete: (book: Book) => void;
}

export const BooksTable: React.FC<BooksTableProps> = ({ books, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper} sx={{ width: '90%', margin: 'auto', marginTop: '2rem' }}>
            <Table>
                <TableHead sx={{ background: "#e0e0e0" }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', ...responsiveFontSize }} align='center'>Title</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', ...responsiveFontSize }} align='center'>Author</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', ...responsiveFontSize }} align='center'>Genre</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', ...responsiveFontSize }} align='center'>Description</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell align='center' sx={{ ...responsiveFontSize }}>{book.title}</TableCell>
                            <TableCell align='center' sx={{ ...responsiveFontSize }}>{book.author}</TableCell>
                            <TableCell align='center' sx={{ ...responsiveFontSize }}>{book.genre}</TableCell>
                            <TableCell align='center' sx={{ ...responsiveFontSize }}>{book.description}</TableCell>
                            <TableCell align='right' sx={{ whiteSpace: 'nowrap' }}>
                                <IconButton onClick={() => onEdit(book)} color="primary" sx={{ padding: '2px' }}>
                                    <EditIcon sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                                </IconButton>
                                <IconButton onClick={() => onDelete(book)} color="secondary" sx={{ padding: '2px' }}>
                                    <DeleteIcon sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};