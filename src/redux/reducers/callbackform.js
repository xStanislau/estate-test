import { sendData } from "../../api/callback/sendCallBack";
import { togglePopupWithTimeout } from "../reducers/popup";

// actions
const SEND_DATA = "estate-test/redux/reducers/callbackForm/SEND_DATA";
const SEND_DATA_SUCCEEDED =
  "estate-test/redux/reducers/callbackForm/SEND_DATA_SUCCEEDED";
const SEND_DATA_FAILED =
  "estate-test/redux/reducers/callbackForm/SEND_DATA_FAILED";
const TOGGLE_CALLBACK_SIDEBAR =
  "estate-test/redux/reducers/callbackForm/TOGGLE_CALLBACK_FORM";
const GET_CALLBACK_FORM_VALUES =
  "estate-test/redux/reducers/callbackForm/GET_CALLBACK_FORM_FORM_VALUES";

export const sendStart = () => ({
  type: SEND_DATA
});

export const sendSuccesseded = data => ({
  type: SEND_DATA_SUCCEEDED,
  payload: data
});

export const sendFailed = error => ({
  type: SEND_DATA_FAILED,
  payload: error
});

// action creators
export const toggleCallbackSidebar = isOpen => ({
  type: TOGGLE_CALLBACK_SIDEBAR,
  payload: isOpen
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
    case SEND_DATA:
      return {
        ...state,
        isLoaded: false
      };
    case SEND_DATA_FAILED:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      };
    case SEND_DATA_SUCCEEDED:
      return {
        ...state,
        isLoaded: true,
        data: action.payload
      };

    case TOGGLE_CALLBACK_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case GET_CALLBACK_FORM_VALUES: {
      return {
        ...state,
        values: action.payload
      };
    }

    default:
      return state;
  }
}

export const sendFormData = data => async dispatch => {
  dispatch(sendStart());
  try {
    const response = await sendData(data);
    dispatch(sendSuccesseded(response));
    dispatch(
      togglePopupWithTimeout({ message: response.data, type: "success" })
    );
  } catch (error) {
    dispatch(sendFailed(error));
    dispatch(togglePopupWithTimeout({ message: error.error, type: "error" }));
  }
};
