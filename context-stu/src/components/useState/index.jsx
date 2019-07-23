import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  useEffect(
    () => {
      // 更新文档的标题
      document.title = `You clicked ${count} times`
      return function clean() {
        // clean something
      }
    },
    [count],
  )

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
