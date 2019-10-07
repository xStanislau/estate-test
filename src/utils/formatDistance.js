export const formatDistance = (mkadDistance, units) => {
  if (mkadDistance && units) {
    return `${mkadDistance} ${units}`;
  }
  return "";
};
