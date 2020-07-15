import React from "react";
import "./styles.css";
import { useRedux } from "./store/redux";

export default function App() {
  const { state, dispatch } = useRedux();

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>useContext and useReducer</h2>
      <p>Count:{state.counter.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <span> - </span>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <hr />
      <p>login:{state.user.login}</p>
      <button onClick={() => dispatch({ type: "SET_TOKEN" })}>登录</button>
      <span> - </span>
      <button onClick={() => dispatch({ type: "RESET_TOKEN" })}>退出</button>
    </div>
  );
}
