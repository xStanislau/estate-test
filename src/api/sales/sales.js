import { BASE_URL } from "../urls";

export const getData = async (offset = 0) => {
  try {
    const path = "/v1/properties/country";
    let url = `${BASE_URL}${path}?pagination[offset]=${offset}&filter[kind]=house`;

    const response = await fetch(url);

    if (!response.ok) throw Error(response.statusText);

    return response.json();
  } catch (error) {
    throw error;
  }
};
