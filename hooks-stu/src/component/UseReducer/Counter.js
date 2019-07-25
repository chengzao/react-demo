import React, { useReducer } from 'react'

// 初始 state
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}



function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      Count: {state.count}
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default Counter
