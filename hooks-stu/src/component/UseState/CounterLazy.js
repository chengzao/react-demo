import React, { useState } from 'react'

// 初始化count
function initCount(count){
  return count+1
}

// 惰性初始 state
function Counter({ initialCount }) {
  const initValue = initCount(initialCount)
  const [count, setCount] = useState(() => {
    const _count = initValue;
    return _count;
  });

  return (
    <div>
      UseState Count: {count}
      <button onClick={() => setCount(initValue)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

export default Counter
