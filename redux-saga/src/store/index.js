import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducers'

import sagas from './saga';

import createSageMiddleware from 'redux-saga'

const sagaMiddleware =  createSageMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

let middleware = [sagaMiddleware]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(sagas)

export default store;
