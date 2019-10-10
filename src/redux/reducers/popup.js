// actions
const TOGGLE_POPUP = "estate-test/redux/reducers/popup/TOGGLE_POPUP";

// action creators
export const togglePopup = options => {
  return {
    type: TOGGLE_POPUP,
    payload: options
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
        options: { ...action.payload }
      };

    default:
      return state;
  }
}
