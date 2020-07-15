import React, { useReducer } from "react";
import ContextContainer from "./context";

const defaultState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <ContextContainer.Provider value={{ state, dispatch }}>
      {props.children}
    </ContextContainer.Provider>
  );
};

export { reducer, ContextProvider };
