import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import { rootReducer } from "./root.reducer";

const middlewares = [reduxThunk];
process.env.NODE_ENV === "development" && middlewares.push(logger);

const composeEhancers = composeWithDevTools({ name: `Redux`, realtime: true, trace: true, traceLimit: 25 });
export const store = createStore(rootReducer, composeEhancers(applyMiddleware(...middlewares)));
