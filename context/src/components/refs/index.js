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
        <FancyButton handleClick={this.handleClick} ref={this.fanc} />
        <CustomTextInput />
      </div>
    )
  }
  componentDidMount() {
    console.log('ref', this.fanc)
  }
  handleClick(val) {
    console.log('handleClick', val)
  }
}
