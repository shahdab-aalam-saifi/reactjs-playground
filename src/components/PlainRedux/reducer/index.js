import { combineReducers } from "redux";
import { todoReducer } from "./todo";
import { filterReducer } from "./filter";

export const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});
