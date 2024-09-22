import axios from 'axios';
import { Book } from '../models/Book';

const baseURL = "http://localhost:3001";

const api = axios.create({
    baseURL,
});

const fetchBooks = () => api.get<Book[]>('/books').then((res) => res.data);

const addBook = (newBook: Book) => api.post<Book>('/books', newBook);

const updateBook = (id: number, updatedBook: Book) => api.put<Book>(`/books/${id}`, updatedBook);

const deleteBook = (id: number) => api.delete(`/books/${id}`);

export const bookAPI = {
    fetchBooks,
    addBook,
    updateBook,
    deleteBook
}