import React from "react";
import Counter from "./usehook";

function CounterDisplay() {
  let counter = Counter.useContainer();
  return (
    <div>
      Counter: <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

export default CounterDisplay;
