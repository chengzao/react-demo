import React,{useState} from 'react'

// 函数式更新
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const AddCount = () => {
    setCount(newCount => newCount+1)
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
