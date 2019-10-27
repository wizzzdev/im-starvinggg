import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as auth } from "./auth";
import { reducer as finder } from "./finder";

const rootReducer = combineReducers({
  auth,
  finder
});

export default createStore(rootReducer, applyMiddleware(thunk));
