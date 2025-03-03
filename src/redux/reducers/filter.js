import { isObject } from "util";
import { createSelector } from "reselect";
import propertyKind from "../../config/propertyKind";
import constants from "../../constants";

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

    case DELETE_FILTER_PARAMETR:
      const { values } = state;
      const { key: prop, value } = action.payload;
      let totalValues;
      if (prop === "kind") {
        values[prop].splice(value, 1);
      } else if (prop === "range") {
        totalValues = Object.keys(values[prop]).length;
      }

      if (totalValues === 1) {
        delete values[prop];
      } else if (values[prop] && isObject(values[prop])) {
        for (const key in values[prop]) {
          if (key === value) {
            delete values[prop][key];
            values[prop] = { ...values[prop] };
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

//selectors
export const getKindsLabels = propertyKind => state => {
  const kind = state.filter.values.kind || [];
  return kind.map((key, index) => {
    return {
      text: propertyKind[key],
      type: "kind",
      key: index
    };
  });
};

export const getRangesLabelWithUnits = units => state => {
  const range = state.filter.values.range || {};
  let rangesWithUnits = [];
  let text;

  for (const key in range) {
    if (range.hasOwnProperty(key)) {
      const element = range[key];
      if (!element.end && element.start) {
        text = `от ${element.start} ${units[key].name}`;
      } else if (element.start && element.end) {
        text = `${element.start} - ${element.end} ${units[key].name}`;
      } else {
        text = `до ${element.end} ${units[key].name}`;
      }
    }

    rangesWithUnits.push({ text, type: "range", key: key });
  }

  return rangesWithUnits;
};

export const getActiveFilters = createSelector(
  getKindsLabels(propertyKind),
  getRangesLabelWithUnits(constants.units),
  (kinds, ranges) => [...kinds, ...ranges]
);
