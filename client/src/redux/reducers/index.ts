import { combineReducers } from "redux";
import countReducer from "./count"
import countReducer2 from "./count2";

const rootReducer = combineReducers( {countReducer, countReducer2 });

export default rootReducer;
