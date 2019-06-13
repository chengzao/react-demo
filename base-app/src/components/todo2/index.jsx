import React, { Component } from 'react';

import TodoItem from './TodoItem'

// Fragment
// dangerouslySetInnerHTML : 允许在里面输出html标签

class TodoList extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props)

    this.handerIptChange = this.handerIptChange.bind(this)
    this.handerButtonClick = this.handerButtonClick.bind(this)
    this.handerDeleteItem = this.handerDeleteItem.bind(this)

    this.state = {
      list: ['react','vue'],
      iptVal: 'todo list'
    }
  }

  handerIptChange(e) {
    let value = e.target.value;

    // ref 获取dom
    console.log('ref input dom : ',this.input)

    this.setState(() => {
      return {
        iptVal: value
      }
    }, () => {
      console.log('setState is End , I am a callback! ')
    })
  }

  handerButtonClick() {

    console.log(' ref ul dom :', this.ul, this.ul.childNodes.length);

    // setState是异步的操作
    this.setState((preState) => ({
      list: [...preState.list, preState.iptVal],
      iptVal: ''
    }), () => {
      console.log(' ref ul dom 2 :', this.ul.childNodes.length);
    })
  }
  handerDeleteItem(index) {
    // console.log('index ', index);
    let newList = [...this.state.list];
    newList.splice(index, 1)

    this.setState(() => ({
      list: newList
    }))
  }

  getItem(){
    return (
      this.state.list.map((item,index) => {
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
        <label htmlFor="insertArea">输入 </label>
          <input
          id='insertArea'
          onChange={this.handerIptChange}
          value={this.state.iptVal}
          ref={(input) => { this.input = input }}
          type="text"
          />
          <button onClick={this.handerButtonClick}>提交</button>
          <ul ref={(ul) => {this.ul = ul }}>
            {
              this.getItem()
            }
          </ul>
       </div>
    );
  }
}

export default TodoList;
