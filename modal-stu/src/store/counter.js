import { INCREMENT, DECREMENT } from './actionType'

const count = 0

export default (state = count, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - action.index;
    default:
      return state;
  }
}
