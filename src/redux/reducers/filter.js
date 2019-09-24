import { isObject } from "util";
// actions
const TOGGLE_FILTER = "estate-test/redux/reducers/filter/TOGGLE_FILTER";
const RESET_FILTER = "estate-test/redux/reducers/filter/RESET_FILTER";
const GET_FILTER_FORM_VALUES =
  "estate-test/redux/reducers/filter/GET_FILTER_FORM_VALUES";
const DELETE_FILTER_PARAMETR =
  "estate-test/redux/reducers/filter/DELETE_FILTER_PARAMETR";

// action creators
export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: isOpen
});

export const resetFilter = () => ({
  type: RESET_FILTER
});

export const getFilterFormValues = values => ({
  type: GET_FILTER_FORM_VALUES,
  payload: values
});

export const deleteFilterParametr = values => ({
  type: DELETE_FILTER_PARAMETR,
  payload: values
});

const initialState = {
  isOpen: false,
  values: {}
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case GET_FILTER_FORM_VALUES:
      return {
        ...state,
        values: action.payload
      };

    case RESET_FILTER:
      return {
        ...state,
        values: []
      };

    case DELETE_FILTER_PARAMETR:
      const { values } = state;

      const { key: prop, value } = action.payload;
      const totalValues = Object.keys(values[prop]).length;
      if (totalValues === 1) {
        delete values[prop];
      } else if (values[prop] && isObject(values[prop])) {
        for (const key in values[prop]) {
          if (values[prop].hasOwnProperty(key)) {
            if (key === value) {
              delete values[prop][key];
            }
          }
        }
      }
      const newValues = { ...values };
      return {
        ...state,
        values: newValues
      };

    default:
      return state;
  }
}
