import React from "react";
import Counter from "./usehook";
import CounterDisplay from "./Counter";

function UnstatedNext() {
  return (
    <Counter.Provider>
      <p>UnstatedNext</p>
      <CounterDisplay />
      <Counter.Provider initialState={2}>
        <div>
          <div>
            <CounterDisplay />
          </div>
        </div>
      </Counter.Provider>
    </Counter.Provider>
  );
}

export default UnstatedNext;
