- redux

```
store : 唯一的
state : 只有它自己能够改自己
action ：
reducer ：纯函数 ； 可以接受state, 但是不能直接修改state

createStore  // 创建store
store.dispatch // 发起action
store.getState  // 获取store内容
store.subscribe // 订阅store内容
```
