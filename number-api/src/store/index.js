// import Redux store methods
import { createStore, applyMiddleware, compose } from "redux";
// import Saga middleware
import createSagaMiddleware from "redux-saga";
// import watcher from saga file we created
import { watcherSaga } from "../sagas";
// import the Reducer
import { reducer } from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composed = compose(
  applyMiddleware(sagaMiddleware),
  reduxDevTools
);

export const store = createStore(reducer, composed);
sagaMiddleware.run(watcherSaga);
