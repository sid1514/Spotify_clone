// store.js
import { applyMiddleware, createStore } from "redux";

import authReducer from "./reducer";
import { thunk } from "redux-thunk";

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
