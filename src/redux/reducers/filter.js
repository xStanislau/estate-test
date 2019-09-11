import { getData } from "../../api/sales/sales";
// actions
const TOGGLE_FILTER = "app/filter/TOGGLE_FILTER";

// action creators
export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: isOpen
});

const initialState = {
  isOpen: false
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    default:
      return state;
  }
}
