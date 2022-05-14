import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './Book.css';
import Progress from './Progress';

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
    <div className="book-container">
      <div className="book-details">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions-container">
          <button type="button">Comments</button>
          <button type="button" onClick={removeHandler}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="card-progress">
        <Progress />
        <div className="current-position">
          <h2>CURRENT CHAPTER</h2>
          <h3>Chapter 3: &quot;A Lesson Learned&quot;</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
