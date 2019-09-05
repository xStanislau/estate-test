export const buildQueryString = options => {
  if (!options || options.length === 0) return "";

  const questionMark = "?";
  if (Array.isArray(options) && options.length > 1) {
    return options
      .map((option, index) => {
        const { type, property, value } = option;

        if (index === 0) {
          return `${questionMark}${type}[${property}]=${value}`;
        }

        return `${type}[${property}]=${value}`;
      })
      .join("&");
  }

  const { type, property, value } = options[0];
  return `${questionMark}${type}[${property}]=${value}`;
};
