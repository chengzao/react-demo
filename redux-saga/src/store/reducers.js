import * as ActionTypes from './actionType';

const defaultState = {
  inputValue: 'new todo',
  list: [  'Racing car',
  'Australian ',
  'Los']
}

export default (state = defaultState, action) => {
  // console.log(state, action)
    switch (action.type) {
      case ActionTypes.CHANGE_INPUT_VALUE:
        {
          const newState = JSON.parse(JSON.stringify(state));
          newState.inputValue = action.value;
          // console.log('newState',newState)
          return newState;
        }
      case ActionTypes.ADD_TODO_ITEM:
        {
          const newState = JSON.parse(JSON.stringify(state));
          // if(newState.inputValue.length === 0){return state}
          newState.list.push(newState.inputValue);
          newState.inputValue = '';
          return newState;
        }
      case ActionTypes.DELETE_TODO_ITEM:
        {
          const newState = JSON.parse(JSON.stringify(state));
          newState.list.splice(action.index,1);
          return newState;
        }
      case ActionTypes.INIT_LIST:
        {
          const newState = JSON.parse(JSON.stringify(state));
          newState.inputValue = action.data.inputValue;
          newState.list = action.data.list;
          return newState;
        }
      default:
        return state;
    }

}
