export const mapRangeToQueryParams = (start, end, property) => {
  if (!end && !start) {
    return "";
  }

  const type = "filter";
  let value = "";
  let divider = "..";

  if (start) {
    value += `${start}${divider}`;
  }

  if (end) {
    value += end;
  }

  return { type, property, value };
};
