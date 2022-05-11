// Action Types
const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';

// Default state
const defaultState = [];

// Reducer function
const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, {
          id: state.id,
          name: state.name,
          author: state.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book !== action.payload.id);
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
  payload: id,
});

export default booksReducer;
