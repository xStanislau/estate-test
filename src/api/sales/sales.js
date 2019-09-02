import { BASE_URL } from "../urls";

export const getData = async offset => {
  try {
    const path = "/v1/properties/country";
    let url = `${BASE_URL}${path}`;

    if (offset) {
      url += `?pagination[offset]=${offset}`;
    }

    const response = await fetch(url);

    if (!response.ok) throw Error(response.statusText);

    return response.json();
  } catch (error) {
    throw error;
  }
};
