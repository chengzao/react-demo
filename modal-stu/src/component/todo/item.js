import React, { Component } from 'react'

export default class TodoItem extends Component {

  constructor(){
    super()
    this.handerClickItem = this.handerClickItem.bind(this)
  }
  handerClickItem(index) {
    this.props.deleteItem(index)
  }
  render() {
    let { content, index } = this.props
    return (
      <div onClick={() => { this.handerClickItem(index)}}>{content}</div>
    )
  }
}
