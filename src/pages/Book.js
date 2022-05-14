import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

export default function Books() {
  const hrStyle = {
    marginTop: '2rem',
    marginBottom: '1.8rem',
    border: 'solid 1px var(--grey-border)',
    borderBottom: 'none',
  };
  return (
    <div className="page-body">
      <BookList />
      <hr style={hrStyle} />
      <AddBook />
    </div>
  );
}
