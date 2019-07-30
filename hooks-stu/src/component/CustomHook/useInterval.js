import React, { useState, useEffect, useRef, Fragment } from "react";

// https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Counter() {
  const [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, isRunning ? delay : null);

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  let handleRunningChange = (state) => {
    setIsRunning(state)
  }

  return (
    <Fragment>
      <h3>hook版Interval Counter：{count}</h3>
      <input value={delay} onChange={handleDelayChange} />
      <button onClick={() => handleRunningChange(false)}>点击停止</button>
      <button onClick={() => handleRunningChange(true)}>点击恢复</button>
      <hr/>
    </Fragment>
  );
}

export default Counter
