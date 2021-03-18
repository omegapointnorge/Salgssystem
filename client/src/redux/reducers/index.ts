import { combineReducers } from "redux";
import countReducer from "./count"
import countReducer2 from "./count2";
import menusOpenReducer from "./menusOpen";

const rootReducer = combineReducers( {countReducer, countReducer2, menusOpenReducer });

export default rootReducer;
