import React from 'react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { useFormik } from 'formik';
import { Book } from '../models/Book';
import { responsiveFontSize, responsiveHeaderFontSize, style } from '../styles/styles';
import * as Yup from 'yup';

interface BookModalFormProps {
    onClose: () => void;
    initialValues?: Book;
    onSubmit: (values: Book) => void;
}

const validations = Yup.object({
    title: Yup.string()
        .required('Title is required'),
    author: Yup.string()
        .required('Author is required'),
    genre: Yup.string()
        .required('Genre is required'),
    description: Yup.string()
        .required('Description is required')
});

export const BookModalForm: React.FC<BookModalFormProps> = ({ onClose, initialValues, onSubmit }) => {
    const formik = useFormik({
        initialValues: initialValues ?? { id: Date.now(), title: '', author: '', genre: '', description: '' },
        validationSchema: validations,
        onSubmit: (values) => {
            onSubmit(values);
            onClose();
        },
    });

    const handleCancel = () => {
        onClose()
    }

    return (
        <Modal open={true} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2" sx={{ ...responsiveHeaderFontSize }}>
                    {initialValues?.title ? 'Update Book' : 'Add New Book'}
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        InputProps={{
                            sx: {
                                ...responsiveFontSize,
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="author"
                        name="author"
                        label="Author"
                        value={formik.values.author}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.author && Boolean(formik.errors.author)}
                        helperText={formik.touched.author && formik.errors.author}
                        InputProps={{
                            sx: {
                                ...responsiveFontSize
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="genre"
                        name="genre"
                        label="Genre"
                        value={formik.values.genre}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.genre && Boolean(formik.errors.genre)}
                        helperText={formik.touched.genre && formik.errors.genre}
                        InputProps={{
                            sx: {
                                ...responsiveFontSize
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="description"
                        name="description"
                        label="Description"
                        value={formik.values.description}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        InputProps={{
                            sx: {
                                ...responsiveFontSize
                            }
                        }}
                    />
                    <Button onClick={() => handleCancel()} sx={{ marginTop: '1rem', ...responsiveFontSize }} color="secondary" variant="contained" fullWidth>
                        Cancel
                    </Button>
                    <Button sx={{ marginTop: '0.5rem', ...responsiveFontSize }} color="primary" variant="contained" fullWidth type="submit">
                        {initialValues?.title ? 'Save' : 'Add'}
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};