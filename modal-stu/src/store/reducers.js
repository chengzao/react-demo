import { combineReducers } from 'redux'
import counter from './counter'
import rep from './github'


export default combineReducers({
  counter,
  rep
})
