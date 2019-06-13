import  * as ActionTypes  from './actionType'

import axios from 'axios';

export const getInputChange = (value) => ({
  type: ActionTypes.CHANGE_INPUT_VALUE,
  value: value
})

export const getAddItem = () => ({
  type: ActionTypes.ADD_TODO_ITEM
})

export const getDeleteItem = (index) => ({
  type: ActionTypes.DELETE_TODO_ITEM,
  index: index
})

const getInitList = (value) => ({
  type: ActionTypes.INIT_TODO_LIST,
  data: value
})

export const AsyncList = () =>{
  return (dispatch) => {
    axios.get('/api/todos.json').then(res => {
      let result = res.data;
      dispatch(getInitList(result))
    }).catch(err => console.log('error',err))
  }
}
