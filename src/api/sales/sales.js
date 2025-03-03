import constants from "../../constants/index";
import { buildQueryString } from "../../utils/buildQueryString";

export const getData = async (
  path,
  options = [
    { type: "pagination", property: "offset", value: 0 },
    { type: "filter", property: "kind", value: "house" }
  ]
) => {
  try {
    const querryString = buildQueryString(options);
    const { api } = constants;
    const url = `${api.baseUrl}${path}${querryString}`;

    const response = await fetch(url);

    if (!response.ok) throw Error(response.statusText);

    return response.json();
  } catch (error) {
    throw error;
  }
};
