import { combineReducers } from "redux";
import sales from "./sales";
import sale from "./sale";
import filter from "./filter";

const rootReducer = combineReducers({
  sales,
  sale,
  filter
});

export default rootReducer;
