import constants from "../constants/index";
import { mapRangeToQueryParams } from "./mapRangeToQueryParams";

export const mapToQueryParams = values => {
  const {
    queryOptions: { filters }
  } = constants;

  const queryParams = [];
  for (const key in filters) {
    if (filters.hasOwnProperty(key)) {
      if (values.range && values.range[key]) {
        const { start, end } = values.range[key];
        queryParams.push(mapRangeToQueryParams(start, end, filters[key]));
      }
    }
  }

  if (values.kind) {
    let currentKinds = [];
    Object.keys(values.kind).forEach(property => {
      currentKinds.push(property);
    });

    queryParams.push({
      type: "filter",
      property: "kind",
      value: currentKinds.join()
    });
  }
  return queryParams;
};
