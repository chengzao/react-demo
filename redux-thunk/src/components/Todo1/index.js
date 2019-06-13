import React , {Component} from 'react'

import { Button, Input, List  } from 'antd';

import store from '../../store';
import './index.css';

// import * as ActionTypes from '../../store/actionType';
import * as Action from '../../store/actions';

class TodoList extends Component {

  constructor(props){
    super(props)

    // 获取
    this.state = store.getState();

    this.handerInputChange = this.handerInputChange.bind(this);

    // console.log(store.getState())

    // 订阅s
    store.subscribe(() => {
      // console.log('store changed')
      //
      this.setState(store.getState());

    })

  }

  handerInputChange(e) {
    let value = e.target.value;

    // let action = {
    //   type: ActionTypes.CHANGE_INPUT_VALUE,
    //   value: value
    // }
    // // 发送action
    // store.dispatch(action);

    store.dispatch(Action.getInputChange(value))

  }

  handerBtnClick() {
    // const action = {
    //   type: ActionTypes.ADD_TODO_ITEM
    // }
    // store.dispatch(action)

    store.dispatch(Action.getAddItem())
  }

  handerDeleteItem(index) {
    // console.log(index)
    // const action = {
    //   type: ActionTypes.DELETE_TODO_ITEM,
    //   index: index
    // }
    // store.dispatch(action)

    store.dispatch(Action.getDeleteItem(index))
  }

  render() {
    return (
      <div className='todolist'>
        <Input
          className='inputStyle'
          placeholder="Basic usage"
          value={this.state.inputValue}
          onChange={this.handerInputChange}
        />
        <Button className='submitbutton' onClick={() => { this.handerBtnClick() } } type="primary">提交</Button>

        <List
          bordered
          className= 'listStyle'
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => {this.handerDeleteItem(index)}}  key={index}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;
