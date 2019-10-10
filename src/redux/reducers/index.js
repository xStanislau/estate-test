import { combineReducers } from "redux";
import sales from "./sales";
import sale from "./sale";
import filter from "./filter";
import towns from "./towns";
import callbackform from "./callbackform";
import popup from "./popup";

const rootReducer = combineReducers({
  sales,
  sale,
  filter,
  towns,
  callbackform,
  popup
});

export default rootReducer;
