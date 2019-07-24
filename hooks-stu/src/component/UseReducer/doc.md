# useReducer

- [usereducer](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)

- 简化版

```js
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
```
