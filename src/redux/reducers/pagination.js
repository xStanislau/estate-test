// actions
const NEXT_PAGE = "app/sale/NEXT_PAGE";
const PREVIOUS_PAGE = "app/sale/PREVIOUS_PAGE";
const LOAD_PAGE = "app/sale/PREVIOUS_PAGE";

// action creators
export const nextPage = pageIndex => ({
  type: NEXT_PAGE,
  payload: id
});

export const previousPage = pageIndex => ({
  type: PREVIOUS_PAGE,
  payload: id
});

export const loadPage = pageIndex => ({
  type: LOAD_PAGE,
  payload: id
});

const initialState = {};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SALE:
      return {
        ...state,
        id: action.payload
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        id: action.payload
      };
    case LOAD_PAGE:
      return {
        ...state,
        id: action.payload
      };

    default:
      return state;
  }
}
