import React from 'react';

const AddBook = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <form className="">
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);

export default AddBook;
