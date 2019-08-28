import { BASE_URL } from "../urls";

export const getData = async id => {
  try {
    const path = "/v1/properties/country";
    const url = `${BASE_URL}${path}`;
    const response = await fetch(url);

    if (!response.ok) throw Error(response.statusText);

    return response.json();
  } catch (error) {
    throw error;
  }
};
