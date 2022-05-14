import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  // Remove book from the list
  const removeHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li key={id}>
      <p>{category}</p>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={removeHandler}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
