import { combineReducers } from "redux";
import menusOpenReducer from "./menusOpen";

// Legg til flere reducers her ved å separere dem med komma
const rootReducer = combineReducers({ menusOpenReducer });

export default rootReducer;
