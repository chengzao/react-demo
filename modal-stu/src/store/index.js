import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import reducer from './reducers'
const store = createStore(reducer,/* preloadedState, */ composeWithDevTools(applyMiddleware(logger,reduxThunk)));
export default () => {
  return store
};
