import React,{ Fragment } from 'react'

import CounterInit from './Counter'

import CounterLazy from './CounterLazy'

function Counter (){
  return (
    <Fragment>
      <CounterInit />
      <CounterLazy initialCount={0} />
    </Fragment>
  )
}

export default Counter
