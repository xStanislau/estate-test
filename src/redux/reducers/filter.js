// actions
const TOGGLE_FILTER = "app/filter/TOGGLE_FILTER";
const GET_FILTER = "app/filter/GET_Filter";

// action creators
export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: isOpen
});

export const getCurrentFilters = filters => ({
  type: GET_FILTER,
  payload: filters
});

const initialState = {
  isOpen: false,
  currentFilters: []
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case GET_FILTER:
      return {
        ...state,
        currentFilters: action.payload
      };

    default:
      return state;
  }
}
