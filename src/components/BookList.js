import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const { books, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  let content = '';
  if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
      />
    ));
  }

  return (
    <div>
      <ul className="">
        {content}
      </ul>
    </div>
  );
};

export default BookList;
