export const formatPlace = (place, localityName) => {
  const text = place && localityName ? `${place} ${localityName}` : "";
  return text;
};
