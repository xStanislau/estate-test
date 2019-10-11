const add = (selector, cssClass) => {
  if (typeof selector !== "string" && typeof cssClass !== "string") {
    throw new Error("Arguments must be a strings");
  }
  document.querySelector(selector).classList.add(cssClass);
};

const remove = (selector, cssClass) => {
  if (typeof selector !== "string" && typeof cssClass !== "string") {
    throw new Error("Arguments must be a strings");
  }

  document.querySelector(selector).classList.remove(cssClass);
};

export default { add, remove };
