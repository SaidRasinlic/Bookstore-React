// Action Types
const CHECK_STATUS = 'CHECK_STATUS';

// Default state
const defaultState = [];

// Reducer function
const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction.';
    default:
      return state;
  }
};

export default categoriesReducer;
