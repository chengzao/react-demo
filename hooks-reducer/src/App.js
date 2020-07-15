import React, { useContext } from "react";
import "./styles.css";
import CounterContext from "./store/context";
export default function App() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>useContext and useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <span> - </span>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
