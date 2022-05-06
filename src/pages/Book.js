import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

export default function Books() {
  return (
    <>
      <h2>Books Page</h2>
      <BookList />
      <AddBook />
    </>
  );
}
