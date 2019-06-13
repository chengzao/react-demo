import * as ActionTypes from './actionType'
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

export const getInitList = (data) => ({
  type: ActionTypes.GET_INIT_LIST,
  data
})

export const initList = (data) => ({
  type: ActionTypes.INIT_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todos.json').then(res => {
      const result = res.data;
      // console.log('result ',result)
      dispatch(initList(result))
    }).catch(err => {
      console.log('error',err)
    })
  }
}
