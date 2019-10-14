// actions
const TOGGLE_POPUP = "estate-test/redux/reducers/popup/TOGGLE_POPUP";

// action creators
export const togglePopup = options => {
  return {
    type: TOGGLE_POPUP,
    options: options
  };
};

const initialState = {
  isOpen: false,
  options: {}
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        isOpen: !state.isOpen,
        options: { ...action.options }
      };

    default:
      return state;
  }
}

export const togglePopupWithTimeout = data => async dispatch => {
  dispatch(togglePopup(data));
  // setTimeout(() => {
  //   dispatch(togglePopup());
  // }, 2000);
};
