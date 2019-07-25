import React,{useState} from 'react'

// 函数式更新
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  function AddCount() {
    const newCount = count + 1
    setCount(newCount)
  }

  return (
    <div>
      useState Counter: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => AddCount()}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

export default Counter
