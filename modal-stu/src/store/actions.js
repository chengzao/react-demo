import * as ActionTypes from './actionType'
import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com'

export const increment = () => ({
  type: ActionTypes.INCREMENT
})

export const decrement = (index) => ({
  type: ActionTypes.DECREMENT,
  index: index
})

export const initList = (data) => ({
  type: ActionTypes.INIT_LIST,
  data
})

export const getInfo = () => {
  return (dispatch) => {
    axios.get('/users/chengzao').then(res => {
      const result = res.data;
      // console.log('result ',result)
      dispatch(initList(result))
    }).catch(err => {
      console.log('error', err)
    })
  }
}
