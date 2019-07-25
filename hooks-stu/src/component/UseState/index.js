import React from 'react'

import ClassExample from './ClassExample'
import HookExample from './HookExample'

import Counter from './Counter'
import CounterLazy from './CounterLazy'

function UseState(){
  return (
    <div className="use-state">
      <ClassExample />
      <HookExample />
      <Counter initialCount={0} />
      <CounterLazy initialCount={0} />
    </div>
  );
}

export default UseState
