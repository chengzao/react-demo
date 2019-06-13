import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Action from './store/actions';

class TodoList extends Component {
  render() {
    const {inputValue, list, handeInputChange, handClick, handDelete} = this.props;
    return (
      <div>
        <input type="text" value={inputValue}
           onChange={handeInputChange}
        />
        <button onClick={handClick}>提交</button>
        <ul>
          {
            list.map((item,index) => {
              return (
                <li  onClick={() => handDelete(index)} key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  componentDidMount(){
    this.props.initList()
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue : state.todos.inputValue,
    list: state.todos.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handeInputChange(e){
      let value = e.target.value;
      dispatch(Action.getInputChange(value))
    },
    handClick(){
      dispatch(Action.getAddItem())
    },
    handDelete(index){
      dispatch(Action.getDeleteItem(index))
    },
    initList(){
      dispatch(Action.AsyncList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
