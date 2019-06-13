import { INIT_LIST } from './actionType'

const defaultInit = {}

export default (state = defaultInit, action) => {
  switch (action.type) {
    case INIT_LIST:
      return {state, ...action.data};
    default:
      return state;
  }
}
