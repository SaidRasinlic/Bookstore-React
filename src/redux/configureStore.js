import { combineReducers } from 'react-redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Single state object
const rootStore = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default rootStore;
