import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul className="">
        {books.map((book) => (
          <Book
            key={uuidv4()}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
