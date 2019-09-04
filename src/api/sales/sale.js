import { BASE_URL } from "../urls";

export const getSaleData = async id => {
  try {
    const path = "/v1/properties/country";
    let url = `${BASE_URL}${path}?filter[id]=${id}`;

    const response = await fetch(url);

    if (!response.ok) throw Error(response.statusText);

    return response.json();
  } catch (error) {
    throw error;
  }
};
