# Personal Library Manager

## Overview

This is a simple Library Manager application built using **React.js** with **TypeScript**. The app allows users to manage a collection of books by providing features to view, add, update, and delete books. Each book contains the following properties:

- Title
- Author
- Genre
- Description

## Features

- View a list of books in a responsive table.
- Add a new book using a modal form.
- Edit an existing book with the same modal form.
- Delete a book with a confirmation modal.
- Form validation for both adding and updating books.
- Responsive design for different screen sizes.

## Technologies

- **React**.
- **TypeScript**.
- **SWR**.
- **Formik**.
- **Yup**.
- **Axios**.
- **Material UI (MUI 5)**.

## Installation and Setup

1. Clone the repository.

2. Install the required dependencies:
    npm install

3. Start the development server:
    npm start

4. Open the application in your browser at `http://localhost:3000`.

## Usage

- **Add a Book**: Click the "ADD NEW BOOK" button to open a modal form. Enter the details (title, author, genre, description) and submit.
- **Edit a Book**: Click the "Edit" icon next to any book. This will open the modal form with pre-filled data. Update the fields and submit.
- **Delete a Book**: Click the "Delete" icon, and confirm deletion in the popup modal.
