import React , {Component} from 'react'


import store from '../../store';
import './index.css';

// import * as ActionTypes from '../../store/actionType';
import * as Action from '../../store/actions';

import TodoUI from './TodoUI';

class TodoList extends Component {

  constructor(props){
    super(props)

    // 获取
    this.state = store.getState();

    this.handerInputChange = this.handerInputChange.bind(this);
    this.handerBtnClick = this.handerBtnClick.bind(this);
    this.handerDeleteItem = this.handerDeleteItem.bind(this);

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

  componentDidMount() {
    // ajax / axios /jquery / fetch
    // axios.get('/api/todos.json').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log('error',err)
    // })

    store.dispatch(Action.getTodoList())

  }

  componentWillUnmount = () => {
    this.setState = ()=>{
      return;
    };
}
  render() {
    return (
      <TodoUI
        inputValue = {this.state.inputValue}
        handerInputChange = {this.handerInputChange}
        handerBtnClick= {this.handerBtnClick}
        handerDeleteItem ={this.handerDeleteItem}
        list = {this.state.list}
      />
    )
  }
}

export default TodoList;
