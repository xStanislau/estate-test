// actions
const LOAD_SALE = "app/sale/LOAD_SALE";

// action creators

export const loadSaleData = id => ({
  type: LOAD_SALE,
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

    default:
      return state;
  }
}
