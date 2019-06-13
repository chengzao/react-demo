import * as ActionTypes from '../actionType';

const defaultState = {
  inputValue: 'new todo',
  list: ['react','vue']
}

export default (state =defaultState, action) => {

  if(action.type === ActionTypes.CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ActionTypes.ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === ActionTypes.DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState;
  }

  if(action.type === ActionTypes.INIT_TODO_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.data.inputValue;
    newState.list = action.data.list;
    return newState;
  }

  return state
}
