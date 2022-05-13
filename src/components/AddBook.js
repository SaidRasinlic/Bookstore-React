import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  // Add book in the list
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = e.target.elements;
    const newBook = {
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    dispatch(addBook(newBook));
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="author" placeholder="Author" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default AddBook;
