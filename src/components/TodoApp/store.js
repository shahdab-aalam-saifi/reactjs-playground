import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = createStore(rootReducer, undefined, applyMiddleware(logger));
