import React, { useContext, useReducer } from "react";

const EMPTY = Symbol("store context");
const StoreContext = React.createContext(EMPTY);

export const Provider = ({ children, store }) => {
  // console.log(store)
  const [state, dispatch] = useReducer(store.reducers, store.state);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useRedux = () => {
  const store = useContext(StoreContext);
  if (store === EMPTY) {
    throw new Error("App Component must be wrapped with <Provider>");
  } else {
    const { state, dispatch } = store;
    return { state, dispatch };
  }
};

export const combineReducer = (reducers) => {
  return (state = {}, action) => {
    let result = Object.keys(reducers).reduce((newState, key) => {
      newState[key] = reducers[key](state[key], action);
      return newState;
    }, {});
    return result;
  };
};
