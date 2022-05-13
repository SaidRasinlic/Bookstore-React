// Action Types
const CHECK_STATUS = 'bookstore-react/categories/CHECK_STATUS';

// Default state
const defaultState = [];

// Reducer function
const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        showStatus: !state.showStatus,
      };
    default:
      return state;
  }
};

// Redux Actions
export const checkStatus = () => ({
  type: CHECK_STATUS,
  showStatus: false,
});

export default categoriesReducer;
