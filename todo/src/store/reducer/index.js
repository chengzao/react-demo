import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable';

import todos from './todos'
// reducer 接受store， 但是不能直接修改传入接收的store，
// 它需要深拷贝一份store，最后返回修改的newStore

// combineReducers 合并多个reducer
export default combineReducers({
  todos
})
