import { combineReducers, applyMiddleware, createStore } from "redux";
import { coinReducer } from "./coin.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ coins: coinReducer });

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
