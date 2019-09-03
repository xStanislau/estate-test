import { combineReducers } from "redux";
import sales from "./sales";
import sale from "./sale";

const rootReducer = combineReducers({
  sales,
  sale
});

export default rootReducer;
