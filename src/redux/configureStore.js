import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Combine multiple reducers
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

// Single state object
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
