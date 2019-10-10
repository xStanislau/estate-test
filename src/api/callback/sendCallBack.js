import { fakeRequest } from "../fakeRequest";

export const sendData = async formData => {
  const response = await fakeRequest(300, formData);
  return response;
};
