import React from "react";
import "./styles.css";
import Counter from "./store/index";

export default function App() {
  const store = Counter.useContainer();
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>use unstated-next</h2>
      <p>Count: {store.state.count}</p>
      <div>
        <button onClick={store.increment}>+1</button> ~{" "}
        <button onClick={store.decrement}>-1</button>
      </div>
    </div>
  );
}
