import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//      const store = createStore(allReducers, composeEnchancers());

export default createStore(rootReducer, composeWithDevTools());
