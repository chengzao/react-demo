import React from "react";

import { ContextProvider } from './reducer'
import Counter from './Counter'


function UseContext() {
  return (
    <ContextProvider>
      <Counter></Counter>
    </ContextProvider>
  )
}

export default UseContext
