import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducers'

import reduxThunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

let middleware = [reduxThunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);
const store = createStore(reducer, enhancer);
export default store;
