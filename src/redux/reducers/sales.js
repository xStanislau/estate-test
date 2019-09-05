import { getData } from "../../api/sales/sales";

// actions
const LOAD_DATA = "app/sales/LOAD_DATA";
const LOAD_DATA_SUCCEEDED = "app/sales/LOAD_DATA_SUCCEEDED";
const LOAD_DATA_FAILED = "app/sales/LOAD_DATA_FAILED";

// action creators
export const fetchStart = () => ({
  type: LOAD_DATA
});

export const fetchSuccesseded = data => ({
  type: LOAD_DATA_SUCCEEDED,
  payload: data
});

export const fetchFailed = error => ({
  type: LOAD_DATA_FAILED,
  payload: error
});

const initialState = {
  isLoaded: false,
  data: []
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        isLoaded: false
      };
    case LOAD_DATA_FAILED:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      };
    case LOAD_DATA_SUCCEEDED:
      return {
        ...state,
        isLoaded: true,
        data: action.payload
      };

    default:
      return state;
  }
}

// async action
export const fetch = options => async dispatch => {
  dispatch(fetchStart());
  try {
    // const options = {
    //   type: "pagination",
    //   property: "offset",
    //   value: offset
    // };
    const response = await getData(options);

    dispatch(fetchSuccesseded(response));
  } catch (error) {
    dispatch(fetchFailed(error));
  }
};
