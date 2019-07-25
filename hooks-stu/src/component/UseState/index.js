import React from 'react'

import ClassExample from './ClassExample'
import HookExample from './HookExample'

import Counter from './Counter'
import ClassCounter from './ClassCounter'
import CounterLazy from './CounterLazy'
import TodoList from './TodoList'


function UseState(){
  return (
    <div className="use-state">
      <h1>useState</h1>
      <ClassExample />
      <HookExample />
      <ClassCounter />
      <Counter initialCount={0} />
      <CounterLazy initialCount={0} />
      <TodoList />
    </div>
  );
}

export default UseState
