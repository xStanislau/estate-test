export const getBackLinkText = (
  currentPath,
  pathsNames = { sales: "Продаже", rent: "Аренде" }
) => {
  const pathKey = currentPath.slice(1);
  const currentPathText = `к ${pathsNames[pathKey]}`;
  return currentPathText;
};
