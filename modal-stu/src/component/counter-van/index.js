import React from 'react'
import { createStore } from 'redux'
import Counter from './counter'
import counter from '../../store/counter'

const store = createStore(counter)


class RenderCounter extends React.Component{
  constructor(){
    super()
    console.log(' store.getState ', store.getState())

    // 获取store
    this.state = { count: store.getState()}

    // 手动订阅更新，也可以事件绑定到视图层
    store.subscribe(() => {
      console.log(' store.subscribe ', store.getState())
      this.setState(() => ({
        count: store.getState()
      }))
    })
  }

  render(){
    return (
      <Counter
        value={this.state.count}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT', index: 1 })}
      />
    )
  }
}




export default RenderCounter
