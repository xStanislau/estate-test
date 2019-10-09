import { isObject } from "util";

// actions
const TOGGLE_CALLBACK_FORM =
  "estate-test/redux/reducers/filter/TOGGLE_CALLBACK_FORM";
const RESET_CALLBACK_FORM =
  "estate-test/redux/reducers/filter/RESET_CALLBACK_FORM";
const GET_CALLBACK_FORM_VALUES =
  "estate-test/redux/reducers/filter/GET_CALLBACK_FORM_FORM_VALUES";

// action creators
export const toggleCallbackForm = isOpen => ({
  type: TOGGLE_CALLBACK_FORM,
  payload: isOpen
});

export const resetCallback = () => ({
  type: RESET_CALLBACK_FORM
});

export const getCallbackFormValues = values => ({
  type: GET_CALLBACK_FORM_VALUES,
  payload: values
});

const initialState = {
  isOpen: false,
  values: {}
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CALLBACK_FORM:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case GET_FILTER_FORM_VALUES: {
      return {
        ...state,
        values: action.payload
      };
    }

    case RESET_FILTER:
      return {
        ...state,
        values: {}
      };

    default:
      return state;
  }
}

export const fetch = (path, options) => async dispatch => {
  dispatch(fetchStart());
  try {
    const response = await getData(path, options);

    dispatch(fetchSuccesseded(response));
  } catch (error) {
    dispatch(fetchFailed(error));
  }
};
