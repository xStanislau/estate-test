import { isObject } from "util";
import constants from "../../constants/index";
// actions
const TOGGLE_FILTER = "app/filter/TOGGLE_FILTER";
const GET_FILTER = "app/filter/GET_FILTER";
const RESET_FILTER = "app/filter/RESET_FILTER";
const GET_FILTER_FORM_VALUES = "app/filter/GET_FILTER_FORM_VALUES";
const DELETE_FILTER_PARAMETR = "app/filter/DELETE_FILTER_PARAMETR";

// action creators
export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: isOpen
});

export const resetFilter = () => ({
  type: RESET_FILTER
});

export const getCurrentFilters = filters => ({
  type: GET_FILTER,
  payload: filters
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
  currentFilters: []
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case GET_FILTER:
      return {
        ...state,
        currentFilters: action.payload
      };

    case GET_FILTER_FORM_VALUES:
      return {
        ...state,
        values: action.payload
      };

    case RESET_FILTER:
      return {
        ...state,
        currentFilters: {},
        values: []
      };

    case DELETE_FILTER_PARAMETR:
      const { values, currentFilters } = state;

      const { key: prop, value } = action.payload;
      const {
        queryOptions: { filters }
      } = constants;

      const mappedArray = currentFilters.map((element, index, arr) => {
        if (prop === "kind") {
          if (element.property === prop) {
            const arrayOfKinds = element.value.split(",");
            const indexToDelete = arrayOfKinds.indexOf(value);
            element.value = arrayOfKinds.splice(indexToDelete, 1).join(",");
            // return element;
          }
        } else if (filters[value] === element.property) {
          arr.splice(index, 1);
        }
      });

      let newFilters = mappedArray.filter(element => {
        return element;
      });

      if (values[prop] && isObject(values[prop])) {
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
        values: newValues,
        currentFilters: newFilters
      };

    default:
      return state;
  }
}
