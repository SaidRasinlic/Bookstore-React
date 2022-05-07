import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      name: 'Head First JavaScript',
      category: 'Business',
      author: 'Elisabeth Robson and Eric Freeman',
    },
    {
      id: 2,
      name: 'Masnavi',
      category: 'Poetry',
      author: 'Hazrat Maulana Jalaluddin Rumi',
    },
    {
      id: 3,
      name: 'Pinocchio',
      category: 'Fiction',
      author: 'Carlo Collodi',
    },
  ];
  return (
    <div>
      <ul className="">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
