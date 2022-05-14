import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  // Add book in the list
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };
    dispatch(postBook(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="author" placeholder="Author" required />
        <input type="text" name="category" placeholder="Category" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default AddBook;
