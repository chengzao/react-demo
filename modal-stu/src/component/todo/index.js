import React, { Component } from 'react'

import TodoItem from './item'

export default class TodoList extends Component {

  constructor() {
    super()
    this.state = {
      list: ['a'],
      inputVal: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handerDeleteItem = this.handerDeleteItem.bind(this)
    this.handleAddList = this.handleAddList.bind(this)
  }
  handleChange(ev) {
    let value = ev.target.value;
    this.setState(() => {
      return {
        'inputVal': value
      }
    })
  }
  handerDeleteItem(index) {
    let newList = [...this.state.list];
    newList.splice(index, 1)

    this.setState(() => ({
      list: newList
    }))
  }
  handleAddList(s){
    console.log('正在执行', s)
    this.setState((preState) => ({
      list: [...preState.list, preState.inputVal],
      inputVal: ''
    }), () => {
      console.log(' ref ul dom 2 :', this.ul.childNodes.length);
    })
  }

  renderList(){
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            content={item}
            index={index}
            key={index}
            deleteItem={this.handerDeleteItem}
          />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
        <button onClick={() => { this.handleAddList('add')}}>Add</button>
        <div ref={(ul) => { this.ul = ul }}>
        {
          this.renderList()
        }
        </div>
      </div>
    )
  }
}
