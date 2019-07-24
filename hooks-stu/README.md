# React Hooks

- [React Hooks](https://zh-hans.reactjs.org/docs/hooks-overview.html)

- [Hook API 索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)

## Hook 规则

[hooks-rules](https://zh-hans.reactjs.org/docs/hooks-rules.html)

### 只在最顶层使用 Hook 

- 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们

### 只在 React 函数中调用 Hook

- 不要在普通的 JavaScript 函数中调用 Hook
- 可以在 React 的函数组件中调用 Hook
- 可以在自定义 Hook 中调用其他 Hook

## 自定义 Hook

[hooks-custom](https://zh-hans.reactjs.org/docs/hooks-custom.html)

自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook

- example

```js
import React, { useState, useEffect } from 'react';

// 自定义 hook
function useFriendStatus(friendID) {
  // 使用 useState
  const [isOnline, setIsOnline] = useState(null);
  
  // 使用useEffect
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

- 在多个 Hook 之间传递信息

```js
const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  // 传递值给自定义 hook
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <div>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </div>
  );
}
```
