import React,{ Fragment } from 'react'

import CounterInit from './Counter'
import CounterLazy from './CounterLazy'
import Todo from './Todo'

import FetchApiExample from './FetchApiExample'

function Counter (){
  return (
    <Fragment>
      <h1>UseReducer</h1>
      <CounterInit />
      <CounterLazy initialCount={0} />
      <Todo />
      <FetchApiExample />
    </Fragment>
  )
}

export default Counter
