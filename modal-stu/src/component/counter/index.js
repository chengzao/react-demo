import React, { Component } from 'react'
import Count from './counter'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { increment, decrement, getInfo } from '../../store/actions'

class Counter extends Component {
  render() {
    console.log('props rep', this.props.rep);

    let { rep, count, onIncrement, onDecrement, getRep} = this.props;

    return (
      <div>
        <h1>Counter</h1>
        <Count
          value={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <button onClick={getRep}>Clike Me</button>
        {rep.login ? <div>{rep.login} : {rep.html_url}</div>: null }
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    count: state.counter,
    rep: state.rep
  }
}

let mapAction = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    // onDecrement: () => {
    //   dispatch(decrement(1))
    // },
    onDecrement: bindActionCreators(() => decrement(2), dispatch),
    getRep: () => {
      dispatch(getInfo())
    }
  }
}

export default connect(mapState, mapAction)(Counter)
