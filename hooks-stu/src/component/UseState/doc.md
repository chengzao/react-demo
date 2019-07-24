# useState

- [useState](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)

- 基础 Hook

```js
// 返回一个 state，以及更新 state 的函数
// setState 函数用于更新 state
const [state, setState] = useState(initialState);
```

## 函数式更新

- example

```js
import React,{ useState } from 'react'

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}
```

- useState 不会自动合并更新对象, 可使用如下方式解决

```js
setState(prevState => {
  // 也可以使用 Object.assign
  return {...prevState, ...updatedValues};
});
```

## 惰性初始 state

初始 state 需要通过复杂计算获得，则可以传入一个函数，
在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

- example

```js
function someExpensiveComputation(props){return props}

const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```
