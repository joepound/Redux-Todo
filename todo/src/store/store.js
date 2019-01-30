import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import logger from "redux-logger";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
