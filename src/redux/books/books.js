// Base URL for Bookstore API
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/R7KMypMndsV57I0sAiuA/books';

// Action Types
const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore-react/books/FETCH_BOOKS';
const FETCH_BOOKS_ERROR = 'bookstore-react/books/FETCH_BOOKS_ERROR';
const FETCH_BOOKS_LOADING = 'bookstore-react/books/FETCH_BOOKS_LOADING';

// Redux Actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBooksError = (error) => ({
  type: FETCH_BOOKS_ERROR,
  payload: error,
});

export const fetchBooksLoading = () => ({
  type: FETCH_BOOKS_LOADING,
});

// Default state
const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const getBooks = () => (dispatch) => {
  dispatch(fetchBooksLoading());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          newBooks.push({
            ...data[key][0],
            item_id: key,
          });
        }
      });
      dispatch(fetchBooks(newBooks));
    })
    .catch((error) => {
      dispatch(fetchBooksError(error.message));
    });
};

export const postBook = (book) => (dispatch) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((book)),
  }).then(() => {
    dispatch(addBook(book));
  });
};

export const deleteBook = (id) => (dispatch) => {
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
  })
    .then(() => {
      dispatch(removeBook(id));
    });
};

// Reducer function
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        loading: false,
        books: state.books.filter((book) => book.item_id !== action.payload),
      };
    case FETCH_BOOKS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
