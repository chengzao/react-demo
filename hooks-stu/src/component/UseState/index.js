import React,{useState} from 'react'

import OldExample from './old'

function UseState(props){

  // 使用 useState 定义 state 变量时候，它返回一个有两个值的数组
  // 第一个值是当前的 state，第二个值是更新 state 的函数

  // useState() 方法里面唯一的参数就是初始 state
  // 返回值为：当前 state 以及更新 state 的函数

  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div className="use-state">
      <OldExample />
      <hr/>
      <p className="red">使用<a target="_bank" href="https://zh-hans.reactjs.org/docs/hooks-state.html">useState</a>的函数组件写法</p>
      <h3>Hook 在 class 内部是不起作用的</h3>
      <span>You clicked {count} times</span>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr />
      <span>You clicked  Change age: {age}</span>
      <button onClick={() => setAge(age + 1)}>
        Click me
      </button>
      <hr />
      <span>You clicked Change fruit: {fruit}</span>
      <button onClick={() => setFruit('apple')}>
        Click me
      </button>
      <hr />
      <span>You clicked Change Words</span>
      <button onClick={() => setTodos(function(parma){
        return [{ text: 'Change Learn Hooks Words'}]
      })}>
        Click me
      </button>
      {
        todos.map(item => <div key={item.text}>{item.text}</div>)
      }
    </div>
  );
}

export default UseState
