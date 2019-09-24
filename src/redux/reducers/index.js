import { combineReducers } from "redux";
import sales from "./sales";
import sale from "./sale";
import filter from "./filter";
import towns from "./towns";

const rootReducer = combineReducers({
  sales,
  sale,
  filter,
  towns
});

export default rootReducer;
