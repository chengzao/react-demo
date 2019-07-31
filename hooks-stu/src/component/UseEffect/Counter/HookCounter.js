import React, {useState, useEffect} from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`HookCounter：You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <span>HookCounter: You clicked {count} times</span>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example
