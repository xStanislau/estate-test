import { getData } from "../../api/sales/sales";
// actions
const LOAD_SALE_DATA = "app/sale/LOAD_DATA";
const LOAD_SALE_ID = "app/sale/LOAD_DATA";
const LOAD_SALE_DATA_SUCCEEDED = "app/sale/LOAD_DATA_SUCCEEDED";
const LOAD_SALE_DATA_FAILED = "app/sale/LOAD_DATA_FAILED";

// action creators
export const loadSaleData = () => ({
  type: LOAD_SALE_DATA
});

export const loadSaleDataSucceeded = data => ({
  type: LOAD_SALE_DATA_SUCCEEDED,
  payload: data
});

export const loadSaleDataFailed = error => ({
  type: LOAD_SALE_DATA_FAILED,
  payload: error
});

// action creators

export const loadSaleId = id => ({
  type: LOAD_SALE_ID,
  payload: id
});

const initialState = {
  isLoaded: false,
  data: {}
};
//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SALE_ID:
      return {
        ...state,
        id: action.payload,
        isLoaded: true
      };

    case LOAD_SALE_DATA:
      return {
        ...state
      };

    case LOAD_SALE_DATA_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        isLoaded: true
      };

    case LOAD_SALE_DATA_FAILED:
      return {
        ...state,
        data: action.payload,
        isLoaded: true
      };

    default:
      return state;
  }
}

export const loadData = id => async dispatch => {
  dispatch(loadSaleData());
  try {
    const options = { type: "filter", property: "id", value: id };
    const response = await getData([options]);

    dispatch(loadSaleDataSucceeded(response));
  } catch (error) {
    dispatch(loadSaleDataFailed(error));
  }
};
