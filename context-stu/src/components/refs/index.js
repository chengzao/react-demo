import React, { Component } from 'react'

import FancyButton from './fancyButton'

import CustomTextInput from './ref'

export default class FancyCom extends Component {
  constructor(props) {
    super(props)
    this.fanc = React.createRef()
  }
  render() {
    return (
      <div>
        <p>React createRef and forwardRef</p>
        <FancyButton handleClick={this.handleClick} ref={this.fanc}>click me!</FancyButton>
        <CustomTextInput />
      </div>
    )
  }
  componentDidMount() {
    console.log('ref', this.fanc)
  }
  handleClick(val) {
    console.log('val: ', val)
  }
}
