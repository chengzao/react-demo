import React, { useContext } from "react";
import { counterContext } from "./reducer";

function Counter() {
  const { state, dispatch } = useContext(counterContext);
  return (
    <div>
      Counter Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
