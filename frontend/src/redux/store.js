import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { testReducer } from "./test/testReducer";

const rootRreducer = combineReducers({
  authReducer,
  testReducer,
});

export const stoer = legacy_createStore(rootRreducer, applyMiddleware(thunk));
