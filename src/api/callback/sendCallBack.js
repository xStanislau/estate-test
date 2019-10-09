export const sendData = async formData => {
  try {
    const response = await fakeRequest(300, formData);
    if (!response.ok) throw Error(response.statusText);
    return response;
  } catch (error) {
    throw error;
  }
};
