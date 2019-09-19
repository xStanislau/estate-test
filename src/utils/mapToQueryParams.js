import constants from "../constants/index";
import { mapRangeToQueryParams } from "./mapRangeToQueryParams";

export const mapToQueryParams = values => {
  const {
    queryOptions: { filters }
  } = constants;
  const { range, kind } = values;
  const queryParams = [];
  for (const key in filters) {
    if (filters.hasOwnProperty(key)) {
      if (range && range[key]) {
        const { start, end } = range[key];
        queryParams.push(mapRangeToQueryParams(start, end, filters[key]));
      }
    }
  }

  if (kind) {
    let currentKinds = [];
    Object.keys(kind).forEach(property => {
      if (kind[property]) {
        currentKinds.push(property);
      }
    });

    queryParams.push({
      type: "filter",
      property: "kind",
      value: currentKinds.join()
    });
  }
  return queryParams;
};
