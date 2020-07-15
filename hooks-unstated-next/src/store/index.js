import { useState } from "react";
import { createContainer } from "./redux";

const defaultState = {
  count: 0
};

function Store(initialState = defaultState) {
  let [state, setState] = useState(initialState);
  let increment = () => setState(pre => ({ count: pre.count + 1 }));
  let decrement = () => setState(pre => ({ count: pre.count - 1 }));
  return {
    state,
    increment,
    decrement
  };
}

export default createContainer(Store);
