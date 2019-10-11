import cssClass from "./cssClass";

const withHideScroll = (selector, overflowClass) => () => {
  cssClass.add(selector, overflowClass);
};

const withShowScroll = (selector, overflowClass) => () => {
  cssClass.remove(selector, overflowClass);
};

export const hideScrollOnBody = withHideScroll("body", "overflow-hidden");
export const showScrollOnBody = withShowScroll("body", "overflow-hidden");

export default {
  withHideScroll,
  withShowScroll
};
