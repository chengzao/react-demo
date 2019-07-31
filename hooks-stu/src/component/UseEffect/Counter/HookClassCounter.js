import React, {useState, useEffect, useRef} from "react";

function Example() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      console.log(`HookClassCounter： clicked ${latestCount.current} times`);
    }, 3000);
  });

  return (
    <div>
      <span>Hook 模拟 ClassCounter: You clicked {count} times</span>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example
