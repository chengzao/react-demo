import React,{useState} from 'react'

// 函数式更新
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      UseState Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

export default Counter
