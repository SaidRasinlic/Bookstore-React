// Action Types
const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';

// Default state
const books = [
  {
    id: 1,
    title: 'Head First JavaScript',
    category: 'Business',
    author: 'Elisabeth Robson and Eric Freeman',
  },
  {
    id: 2,
    title: 'Harry Potter',
    category: 'Novel',
    author: 'J.K. Rowling',
  },
  {
    id: 3,
    title: 'Pinocchio',
    category: 'Fiction',
    author: 'Carlo Collodi',
  },
  {
    id: 4,
    title: 'Anna Karenina',
    category: 'Novel',
    author: 'Leo Tolstoy',
  },
];

// Reducer function
const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, {
          id: state.length + 1,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Redux Actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export default booksReducer;
