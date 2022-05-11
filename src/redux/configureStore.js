import {
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Single state object
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
