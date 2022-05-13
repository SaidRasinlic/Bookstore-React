import {
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Combine multiple reducers
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

// Single state object
const store = createStore(rootReducer);

export default store;
