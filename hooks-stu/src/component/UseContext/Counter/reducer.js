import React, { useReducer } from "react";

const initialState = { count: 0 };
const counterContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </counterContext.Provider>
  );
};

export { reducer, counterContext, ContextProvider };
